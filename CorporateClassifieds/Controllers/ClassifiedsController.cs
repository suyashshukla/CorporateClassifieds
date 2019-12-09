using AppLibrary.DI;
using AutoMapper;
using System.Collections.Generic;
using System.Web.Http;
using ClassifiedsView = CoreModel.ClassifiedsView;

namespace CorporateClassifieds.Controllers
{
  public class ClassifiedsController : ApiController
  {
    private IDataAccess dataAccess;

    public ClassifiedsController(IDataAccess dataAccess, IMapper mapper)
    {
      this.dataAccess = dataAccess;
    }

    public IHttpActionResult Post(ClassifiedsView classifieds)
    {
      return Ok(dataAccess.Insert(classifieds));
    }

    public IEnumerable<ClassifiedsView> Get()
    {
      return dataAccess.Get();
    }

    public ClassifiedsView Get(int id)
    {
      return dataAccess.Get(id);
    }

    public int Delete(int id)
    {
      return dataAccess.Delete(id);
    }

    public int Put(ClassifiedsView ad)
    {
      return dataAccess.Update(ad);
    }

  }
}
