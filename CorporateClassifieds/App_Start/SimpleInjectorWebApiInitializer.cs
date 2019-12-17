[assembly: WebActivator.PostApplicationStartMethod(typeof(CorporateClassifieds.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace CorporateClassifieds.App_Start
{
  using AppLibrary.DataLayer;
  using AppLibrary.DI;
  using AutoMapper;
  using Services;
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

      container.Register<IClassifiedsService, ClassifiedsService>();
      container.Register<ICategoryService, CategoryService>();
      container.Register<IOfferService, OfferService>();
      container.Register<IMapper>(() => new Mapper(config));
    }
  }


}
