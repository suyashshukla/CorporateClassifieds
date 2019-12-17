using classifieds;
using CoreModel;
using PetaPoco;
using System.Collections.Generic;

namespace AppLibrary.DI
{
    public class ClassifiedsService : IClassifiedsService
    {
        private Database database;
        private AutoMapper.IMapper mapper;

        public ClassifiedsService(AutoMapper.IMapper mapper)
        {
            database = new Database("classifieds");
            this.mapper = mapper;
        }

        public int Delete(int id)
        {
            ClassifiedData classified = database.Single<ClassifiedData>("SELECT * FROM classifieds WHERE id=" + id);

            return database.Delete(classified);
        }

        public IEnumerable<ClassifiedsView> Get()
        {
            IEnumerable<ClassifiedData> source = database.Query<ClassifiedData>("SELECT * FROM classifieds");

            IEnumerable<ClassifiedsView> destination = mapper.Map<IEnumerable<ClassifiedsView>>(source);
        
            return destination;
        }

        public ClassifiedsView Get(int id)
        {
            ClassifiedData source = database.Single<ClassifiedData>("SELECT * FROM classifieds WHERE id=" + id);
            ClassifiedsView destination = mapper.Map<ClassifiedsView>(source);

            return destination;
        }

        public int Insert(ClassifiedsView classifieds)
        {
            ClassifiedData classifiedsData = mapper.Map<ClassifiedData>(classifieds);

            return database.Insert("classifieds", classifiedsData) == null ? 0 : 1;
        }

        public int Update(ClassifiedsView ad)
        {
            return database.Update(ad);
        }
    }
}
