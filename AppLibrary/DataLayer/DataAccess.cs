using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CoreModel;
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
            classified classified = database.Single<classified>("SELECT * FROM classifieds WHERE id=" + id);

            return database.Delete(classified);
        }

        public IEnumerable<classified> get()
        {
            IEnumerable<classified> source = database.Query<classified>("SELECT * FROM classifieds");

           // IEnumerable<advertisement> destination = mapper.Map<IEnumerable<CoreModel.CoreAd>>(source);

            return source;
        }

        public CoreAd get(int id)
        {
            advertisement source = database.Single<advertisement>("SELECT * FROM advertisement WHERE id="+ id);
            CoreAd ads = mapper.Map<CoreAd>(source);

            return ads;
        }

        public int insert(classified ad)
        {
            return database.Insert("classifieds",ad)==null?0:1;
        }

        public int update(advertisement ad)
        {
            return database.Update(ad);
        }
    }
}
