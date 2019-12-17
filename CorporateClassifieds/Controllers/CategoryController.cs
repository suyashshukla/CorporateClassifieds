using AppLibrary.DataLayer;
using classifieds;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CorporateClassifieds.Controllers
{
  public class CategoryController : ApiController
  {

    ICategoryService category;

    public CategoryController(ICategoryService category)
    {
      this.category = category;
    }

    public IEnumerable<category> Get()
    {
      return category.Get();
    }

    public category Get(int id)
    {
      return category.Get(id);
    }

    public int Post(category model)
    {
      return category.Insert(model);
    }

    public int Put(category model)
    {
      return category.Update(model);
    }
  }
}
