using classifieds;
using System.Collections.Generic;

namespace AppLibrary.DataLayer
{
    public interface IOfferService
    {
        IEnumerable<CoreModel.OffersView> Get();
        CoreModel.OffersView Get(int id);
        int Post(CoreModel.OffersView offer);
        int Delete(int id);
        int Put(CoreModel.OffersView offer);

    }
}
