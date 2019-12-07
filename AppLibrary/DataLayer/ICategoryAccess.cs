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

        IEnumerable<category> get();
        category get(int id);
        int insert(category category);
        int update(category category);
        

    }
}
