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


        public IEnumerable<CategoryModel> get()
        {
            return database.Query<CategoryModel>("SELECT * FROM category");
        }

        public CategoryModel get(int id)
        {
            return database.Single<CategoryModel>("SELECT * FROM category WHERE id=" + id);
        }

        public int insert(CategoryModel category)
        {
            return database.Insert(category)==null?0:1;
        }

        public int update(CategoryModel category)
        {
            return database.Update(category);
        }
    }
}
