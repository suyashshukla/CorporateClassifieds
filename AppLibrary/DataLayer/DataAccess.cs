using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AppCore;
using classifieds;
using PetaPoco;
using AutoMapper;

namespace AppLibrary.DI
{
    public class DataAccess : IDataAccess
    {

        Database database;
        AutoMapper.IMapper mapper;

        public DataAccess(AutoMapper.IMapper mapper)
        {
            database = new Database("classifieds");
            this.mapper = mapper;
        }

        public int delete(int id)
        {
            classifieds.DataModel ad = database.Single<classifieds.DataModel>("SELECT * FROM advertisement WHERE id="+ id);
            return database.Delete(ad);
        }

        public IEnumerable<CoreModel> get()
        {
            IEnumerable<classifieds.DataModel> source = database.Query<classifieds.DataModel>("SELECT * FROM advertisement");

            IEnumerable<CoreModel> destination = mapper.Map<IEnumerable<CoreModel>>(source);

            return destination;
        }

        public CoreModel get(int id)
        {
            classifieds.DataModel source = database.Single<classifieds.DataModel>("SELECT * FROM advertisement WHERE id="+ id);
            CoreModel ads = mapper.Map<CoreModel>(source);

            return ads;
        }

        public int insert(classifieds.DataModel ad)
        {
            return database.Insert(ad)==null?0:1;
        }

        public int update(classifieds.DataModel ad)
        {
            return database.Update(ad);
        }
    }
}
