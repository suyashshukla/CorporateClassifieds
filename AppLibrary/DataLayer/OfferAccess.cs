using classifieds;
using CoreModel;
using DataModel;
using PetaPoco;
using System.Collections.Generic;
using IMapper = AutoMapper.IMapper;

namespace AppLibrary.DataLayer
{
    public class OfferAccess : IOfferAccess
    {
        private Database database;
        private readonly IMapper mapper;

        public OfferAccess(IMapper mapper)
        {
            database = new Database("classifieds");
            this.mapper = mapper;
        }

        public int Delete(int id)
        {
            OfferData offer = mapper.Map<OfferData>(Get(id));

            int delete = database.Delete(offer);

            return delete;
        }

        public IEnumerable<CoreModel.OffersView> Get()
        {
            IEnumerable<OfferData> offerList = database.Query<OfferData>("SELECT * FROM offers");

            IEnumerable<OfferIntermediate> offerIntermediates = mapper.Map<IEnumerable<OfferIntermediate>>(offerList);

            List<OffersView> offers = new List<OffersView>();

            foreach(OfferIntermediate offerIntermediate in offerIntermediates)
            {
                OffersView offer = ConvertToViewModel(offerIntermediate);

                offers.Add(offer);                             
            }
            
            return offers;
        }

        public CoreModel.OffersView Get(int id)
        {
            OfferData offer = database.Single<OfferData>("SELECT * FROM offers WHERE id=@0", id);

            OfferIntermediate offersView = mapper.Map<OfferIntermediate>(offer);

            CoreModel.OffersView offers = ConvertToViewModel(offersView);

            return offers;
        }

        public int Post(CoreModel.OffersView offerData)
        {
            ClassifiedData classified = mapper.Map<ClassifiedData>(offerData.adData);

            OfferIntermediate offerIntermediate = new OfferIntermediate()
            {
                id = offerData.id,
                comments = offerData.comments,
                adData = classified,
                userData = offerData.userData,
                amount = offerData.amount,
                timestamp = offerData.timestamp
            };

            OfferData offers = mapper.Map<OfferData>(offerIntermediate);

            object insert = database.Insert(offers);

            return insert == null ? 0 : 1;
        }

        public int Put(CoreModel.OffersView offerData)
        {
            ClassifiedData classified = mapper.Map<ClassifiedData>(offerData.adData);

            OfferIntermediate offerIntermediate = new OfferIntermediate()
            {
                id = offerData.id,
                comments = offerData.comments,
                adData = classified,
                userData = offerData.userData,
                amount = offerData.amount,
            };

            OfferData offers = mapper.Map<OfferData>(offerIntermediate);

            int update = database.Update(offers);

            return update;
        }

        public OffersView ConvertToViewModel(OfferIntermediate offer)
        {

            CoreModel.OffersView offers = new CoreModel.OffersView()
            {
                id = offer.id,
                comments = offer.comments,
                amount = offer.amount,
                adData = mapper.Map<ClassifiedsView>(offer.adData),
                userData = offer.userData,
                timestamp = offer.timestamp
            };

            return offers;

        }
    }
}
