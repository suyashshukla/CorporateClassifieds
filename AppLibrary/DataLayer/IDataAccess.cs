using AppCore;
using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLibrary.DI
{
    public interface IDataAccess
    {

        IEnumerable<CoreModel> get();

        CoreModel get(int id);

        int delete(int id);

        int insert(classifieds.DataModel ad);

        int update(classifieds.DataModel ad);


    }
}
