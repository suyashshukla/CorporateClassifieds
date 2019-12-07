using CoreModel;
using DataModel;
using AppLibrary;
using AppLibrary.DI;
using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using Advertisement = CoreModel.Advertisement;

namespace CorporateClassifieds.Controllers
{
  public class ClassifiedsController : ApiController
  {

    IDataAccess dataAccess;
    IMapper mapper;

    public ClassifiedsController(IDataAccess dataAccess, IMapper mapper)
    {
      this.dataAccess = dataAccess;
      this.mapper = mapper;
    }

    public IHttpActionResult Post(CoreModel.Advertisement ad)
    {
      System.Diagnostics.Debug.WriteLine(ad);

      classified advertisement = mapper.Map<classified>(ad);
    
      return Ok(dataAccess.insert(advertisement));
    }

    public IEnumerable<Advertisement> Get()
    {

      IEnumerable<Advertisement> ad = mapper.Map<IEnumerable<Advertisement>>(dataAccess.get());

      return ad; 
    }

    public CoreAd Get(int id)
    {
      return dataAccess.get(id); 
    }

    public int Delete(int id)
    {
      return dataAccess.delete(id);
    }

    public int Put(advertisement ad)
    {
      return dataAccess.update(ad);
    }

  }
}
