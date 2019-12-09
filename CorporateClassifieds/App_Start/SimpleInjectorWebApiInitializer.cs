[assembly: WebActivator.PostApplicationStartMethod(typeof(CorporateClassifieds.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace CorporateClassifieds.App_Start
{
  using AppLibrary;
  using AppLibrary.DataLayer;
  using AppLibrary.DI;
  using AutoMapper;
  using classifieds;
  using CoreModel;
  using Newtonsoft.Json;
  using SimpleInjector;
  using SimpleInjector.Integration.WebApi;
  using SimpleInjector.Lifestyles;
  using System.Web.Http;

  public static class SimpleInjectorWebApiInitializer
  {

    /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
    public static void Initialize()
    {
      Container container = new Container();
      container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

      InitializeContainer(container);

      container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

      container.Verify();

      GlobalConfiguration.Configuration.DependencyResolver =
          new SimpleInjectorWebApiDependencyResolver(container);
    }

    private static void InitializeContainer(Container container)
    {

      MapperConfiguration config = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfile>());
            


      container.Register<IDataAccess, DataAccess>();
      container.Register<ICategoryAccess, CategoryAccess>();
      container.Register<IMapper>(() => new Mapper(config));
    }
  }

  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
     

      CreateMap<ClassifiedsView, Classified>()
        .ForMember(destination => destination.userdata,
        map => map.MapFrom(source => DataTransformation.ToUserJson(source.userdata)))
        .ForMember(destination => destination.details,
        map => map.MapFrom(source => DataTransformation.ToDetailsJson(source.details)))
        .ForMember(destination => destination.timeinfo,
        map => map.MapFrom(source => DataTransformation.ToTimeJson(source.timeinfo)));

      CreateMap<Classified, ClassifiedsView>()
        .ForMember(destination => destination.timeinfo,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<Time>(source.timeinfo)))
        .ForMember(destination => destination.details,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<ClassifiedDetails>(source.details)))
        .ForMember(destination => destination.userdata,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<User>(source.userdata)));
   

    }
  }
}
