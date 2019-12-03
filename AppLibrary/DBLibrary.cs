using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLibrary
{

    public class DBLibrary
    {

        PetaPoco.Database database = new PetaPoco.Database("classifieds");

        public IEnumerable<advertisement> Get()
        {
            return database.Query<advertisement>("SELECT * FROM advertisement");
        }

        public advertisement Get(int id)
        {
            return database.Single<advertisement>("SELECT * FROM advertisement WHERE id=" + id);
        }

        public int Post(advertisement ad) 
        {
            return database.Insert(ad)!=null?1:0;
        }

        public int Delete(int id)
        {
            advertisement ad = Get(id);
            return database.Delete(ad);
        }

    }
}
