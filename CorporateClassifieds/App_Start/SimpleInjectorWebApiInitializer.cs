[assembly: WebActivator.PostApplicationStartMethod(typeof(CorporateClassifieds.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace CorporateClassifieds.App_Start
{
    using System.Web.Http;
    using SimpleInjector;
    using SimpleInjector.Integration.WebApi;
    using SimpleInjector.Lifestyles;
  using AppLibrary.DI;
  using AppLibrary.DataLayer;
  using AppLibrary;
  using AutoMapper;
  using classifieds;
  using AppCore;
  using DataModel;

  public static class SimpleInjectorWebApiInitializer
    {
        /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
        public static void Initialize()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();
            
            InitializeContainer(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
       
            container.Verify();
            
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
     
        private static void InitializeContainer(Container container)
        {

            var config = new MapperConfiguration(cfg => cfg.CreateMap<DataModel, CoreModel>()
            .ForMember(destination => destination.expiry,
            map => map.MapFrom(
              source => DataTransformation.getExpiry(source.timestamp.ToString(), int.Parse(source.validity.ToString())))
            )
            .ForMember(destination=>destination.timestamp,
            map => map.MapFrom(
              source => DataTransformation.getDate(source.timestamp.ToString()))
            ));

            container.Register<IDataAccess, DataAccess>();
            container.Register<ICategoryAccess, CategoryAccess>();
            container.Register<IMapper>(()=>new Mapper(config));
        }
    }
}
