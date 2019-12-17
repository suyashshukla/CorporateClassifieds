using AppLibrary.DataLayer;
using classifieds;
using System.Collections.Generic;
using System.Web.Http;

namespace CorporateClassifieds.Controllers
{
  public class OffersController : ApiController
  {
    private IOfferService offerService;

    public OffersController(IOfferService offerService)
    {
      this.offerService = offerService;
    }

    public IEnumerable<CoreModel.OffersView> Get()
    {
      return offerService.Get();
    }

    public CoreModel.OffersView Get(int id)
    {
      return offerService.Get(id);
    }

    public int Post(CoreModel.OffersView offer)
    {
      return offerService.Post(offer);
    }

    public int Put(CoreModel.OffersView offer)
    {
      return offerService.Put(offer);
    }

    public int Delete(int id)
    {
      return offerService.Delete(id);
    }


  }
}
