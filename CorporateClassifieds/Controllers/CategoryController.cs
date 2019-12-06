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

    ICategoryAccess category;

    public CategoryController(ICategoryAccess category)
    {
      this.category = category;
    }

    public IEnumerable<CategoryModel> Get()
    {
      return category.get();
    }

    public CategoryModel Get(int id)
    {
      return category.get(id);
    }

    public int Post(CategoryModel model)
    {
      return category.insert(model);
    }

    public int Put(CategoryModel model)
    {
      return category.update(model);
    }
  }
}
