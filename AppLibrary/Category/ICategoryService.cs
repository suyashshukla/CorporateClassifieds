using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLibrary.DataLayer
{
    public interface ICategoryService
    {

        IEnumerable<category> Get();
        category Get(int id);
        int Insert(category category); 
        int Update(category category);       

    }
}
