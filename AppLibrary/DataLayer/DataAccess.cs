using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using classifieds;
using PetaPoco;

namespace AppLibrary.DI
{
    public class DataAccess : IDataAccess
    {

        Database database;

        public DataAccess()
        {
            database = new Database("classifieds");
        }

        public int delete(int id)
        {
            advertisement ad = get(id);
            return database.Delete(ad);
        }

        public IEnumerable<advertisement> get()
        {

            return database.Query<advertisement>("SELECT * FROM advertisement");
        }

        public advertisement get(int id)
        {
            return database.Single<advertisement>("SELECT * FROM advertisement WHERE id="+id);
        }

        public int insert(advertisement ad)
        {
            return database.Insert(ad)==null?0:1;
        }
    }
}
