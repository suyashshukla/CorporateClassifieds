using CoreModel;
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

        IEnumerable<classified> get();

        CoreAd get(int id);

        int delete(int id);

        int insert(classifieds.classified ad);

        int update(classifieds.advertisement ad);


    }
}
