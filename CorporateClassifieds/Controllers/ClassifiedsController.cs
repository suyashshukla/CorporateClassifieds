using AppLibrary;
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

    DBLibrary db = new DBLibrary();

    public IHttpActionResult Post(advertisement ad)
    {
      return Ok(db.Post(ad));
    }

    public IEnumerable<advertisement> Get()
    {
      return db.Get(); 
    }

    public advertisement Get(int id)
    {
      return db.Get(id); 
    }

    public int Delete(int id)
    {
      return db.Delete(id);
    }

  }
}
