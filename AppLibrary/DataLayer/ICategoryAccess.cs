using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLibrary.DataLayer
{
    public interface ICategoryAccess
    {

        IEnumerable<CategoryModel> get();
        CategoryModel get(int id);
        int insert(CategoryModel category);
        int update(CategoryModel category);
        

    }
}
