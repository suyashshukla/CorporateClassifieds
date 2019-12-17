using CoreModel;
using System.Collections.Generic;

namespace AppLibrary.DI
{
    public interface IClassifiedsService
    {

        IEnumerable<ClassifiedsView> Get();

        ClassifiedsView Get(int id);

        int Delete(int id);

        int Insert(ClassifiedsView ad);

        int Update(ClassifiedsView ad);


    }
}
