using AppCore;
using AppLibrary;
using AppLibrary.DI;
using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CorporateClassifieds.Controllers
{
  public class ClassifiedsController : ApiController
  {

    IDataAccess dataAccess;

    public ClassifiedsController(IDataAccess dataAccess)
    {
      this.dataAccess = dataAccess;
    }

    public IHttpActionResult Post(classifieds.DataModel ad)
    {
      return Ok(dataAccess.insert(ad));
    }

    public IEnumerable<CoreModel> Get()
    {
      return dataAccess.get(); 
    }

    public CoreModel Get(int id)
    {
      return dataAccess.get(id); 
    }

    public int Delete(int id)
    {
      return dataAccess.delete(id);
    }

    public int Put(classifieds.DataModel ad)
    {
      return dataAccess.update(ad);
    }

  }
}
