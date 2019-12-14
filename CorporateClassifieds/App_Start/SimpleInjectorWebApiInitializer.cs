[assembly: WebActivator.PostApplicationStartMethod(typeof(CorporateClassifieds.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace CorporateClassifieds.App_Start
{
  using AppLibrary;
  using AppLibrary.DataLayer;
  using AppLibrary.DI;
  using AutoMapper;
  using classifieds;
  using CoreModel;
  using DataModel;
  using Newtonsoft.Json;
  using SimpleInjector;
  using SimpleInjector.Integration.WebApi;
  using SimpleInjector.Lifestyles;
  using System.Web.Http;

  public static class SimpleInjectorWebApiInitializer
  {

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
      container.Register<IOfferAccess, OfferAccess>();
      container.Register<IMapper>(() => new Mapper(config));
    }
  }

  public class MappingProfile : Profile
  {
    public MappingProfile()
    {

      CreateMap<ClassifiedsView, ClassifiedData>()
        .ForMember(destination => destination.userdata,
        map => map.MapFrom(source => DataTransformation.ToUserJson(source.userdata)))
        .ForMember(destination => destination.details,
        map => map.MapFrom(source => DataTransformation.ToDetailsJson(source.details)))
        .ForMember(destination => destination.timeinfo,
        map => map.MapFrom(source => DataTransformation.ToTimeJson(source.timeinfo)));

      CreateMap<ClassifiedData, ClassifiedsView>()
        .ForMember(destination => destination.timeinfo,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<Time>(source.timeinfo)))
        .ForMember(destination => destination.details,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<ClassifiedDetails>(source.details)))
        .ForMember(destination => destination.userdata,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<User>(source.userdata)));

      CreateMap<OfferIntermediate, OfferData>()
      .ForMember(destination => destination.userData,
      map => map.MapFrom(source => DataTransformation.ToUserJson(source.userData)))
      .ForMember(destination => destination.adData,
      map => map.MapFrom(source => JsonConvert.SerializeObject(source.adData)));

      CreateMap<OfferData, OfferIntermediate>()
        .ForMember(destination => destination.userData,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<User>(source.userData)))
        .ForMember(destination => destination.adData,
        map => map.MapFrom(source => JsonConvert.DeserializeObject<ClassifiedData>(source.adData))); ;

    }
  }
}
