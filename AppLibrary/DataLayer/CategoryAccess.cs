using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using classifieds;
using PetaPoco;

namespace AppLibrary.DataLayer
{
    public class CategoryAccess : ICategoryAccess
    {

        Database database;

        public CategoryAccess()
        {
            database = new Database("classifieds");
        }

        public IEnumerable<category> get()
        {
            return database.Query<category>("SELECT * FROM category");
        }

        public category get(int id)
        {
            return database.Single<category>("SELECT * FROM category WHERE id=" + id);
        }

        public int insert(category category)
        {
            return database.Insert(category)==null?0:1;
        }

        public int update(category category)
        {
            return database.Update(category);
        }
    }
}
