using classifieds;
using CoreModel;
using PetaPoco;
using System.Collections.Generic;

namespace AppLibrary.DI
{
    public class DataAccess : IDataAccess
    {
        private Database database;
        private AutoMapper.IMapper mapper;

        public DataAccess(AutoMapper.IMapper mapper)
        {
            database = new Database("classifieds");
            this.mapper = mapper;
        }

        public int Delete(int id)
        {
            Classified classified = database.Single<Classified>("SELECT * FROM classifieds WHERE id=" + id);

            return database.Delete(classified);
        }

        public IEnumerable<ClassifiedsView> Get()
        {
            IEnumerable<Classified> source = database.Query<Classified>("SELECT * FROM classifieds");

            IEnumerable<ClassifiedsView> destination = mapper.Map<IEnumerable<ClassifiedsView>>(source);

            return destination;
        }

        public ClassifiedsView Get(int id)
        {
            Classified source = database.Single<Classified>("SELECT * FROM classifieds WHERE id=" + id);
            ClassifiedsView destination = mapper.Map<ClassifiedsView>(source);

            return destination;
        }

        public int Insert(ClassifiedsView classifieds)
        {
            Classified classifiedsData = mapper.Map<Classified>(classifieds);

            return database.Insert("classifieds", classifiedsData) == null ? 0 : 1;
        }

        public int Update(ClassifiedsView ad)
        {
            return database.Update(ad);
        }
    }
}
