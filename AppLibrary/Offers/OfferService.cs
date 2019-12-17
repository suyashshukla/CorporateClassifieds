using classifieds;
using CoreModel;
using DataModel;
using PetaPoco;
using System.Collections.Generic;
using IMapper = AutoMapper.IMapper;

namespace AppLibrary.DataLayer
{
    public class OfferService : IOfferService
    {
        private Database database;
        private readonly IMapper mapper;

        public OfferService(IMapper mapper)
        {
            database = new Database("classifieds");
            this.mapper = mapper;
        }

        public int Delete(int id)
        {
            OfferData offer = database.Single<OfferData>("SELECT * FROM offers WHERE id=" + id);

            int delete = database.Delete(offer);

            return delete;
        }

        public IEnumerable<CoreModel.OffersView> Get()
        {
            IEnumerable<OfferData> offerList = database.Query<OfferData>("SELECT * FROM offers");

            IEnumerable<OfferIntermediate> offerIntermediates = mapper.Map<IEnumerable<OfferIntermediate>>(offerList);

            IEnumerable<OffersView> offers = mapper.Map<IEnumerable<OffersView>>(offerIntermediates);

            return offers;
        }

        public CoreModel.OffersView Get(int id)
        {
            OfferData offer = database.Single<OfferData>("SELECT * FROM offers WHERE id="+id);

            OfferIntermediate offersIntermediate = mapper.Map<OfferIntermediate>(offer);

            CoreModel.OffersView offers = mapper.Map<OffersView>(offersIntermediate);

            return offers;
        }

        public int Post(CoreModel.OffersView offerData)
        {
            OfferIntermediate offerIntermediate = mapper.Map<OfferIntermediate>(offerData);

            OfferData offers = mapper.Map<OfferData>(offerIntermediate);

            object insert = database.Insert(offers);

            return insert == null ? 0 : 1;
        }

        public int Put(CoreModel.OffersView offerData)
        {

            OfferIntermediate offerIntermediate = mapper.Map<OfferIntermediate>(offerData);

            OfferData offers = mapper.Map<OfferData>(offerIntermediate);

            int update = database.Update(offers);

            return update;
        }
    }
}
