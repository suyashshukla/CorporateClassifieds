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

    public IHttpActionResult Post(advertisement ad)
    {
      return Ok(dataAccess.insert(ad));
    }

    public IEnumerable<advertisement> Get()
    {
      return dataAccess.get(); 
    }

    public advertisement Get(int id)
    {
      return dataAccess.get(id); 
    }

    public int Delete(int id)
    {
      return dataAccess.delete(id);
    
    }

  }
}
