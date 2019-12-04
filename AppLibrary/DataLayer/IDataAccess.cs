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

        IEnumerable<advertisement> get();

        advertisement get(int id);

        int delete(int id);

        int insert(advertisement ad);


    }
}
