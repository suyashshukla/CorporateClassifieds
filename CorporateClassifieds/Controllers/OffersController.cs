using AppLibrary.DataLayer;
using classifieds;
using System.Collections.Generic;
using System.Web.Http;

namespace CorporateClassifieds.Controllers
{
  public class OffersController : ApiController
  {
    private IOfferAccess offerAccess;

    public OffersController(IOfferAccess offerAccess)
    {
      this.offerAccess = offerAccess;
    }

    public IEnumerable<CoreModel.OffersView> Get()
    {
      return offerAccess.Get();
    }

    public CoreModel.OffersView Get(int id)
    {
      return offerAccess.Get(id);
    }

    public int Post(CoreModel.OffersView offer)
    {
      return offerAccess.Post(offer);
    }

    public int Put(CoreModel.OffersView offer)
    {
      return offerAccess.Put(offer);
    }


  }
}
