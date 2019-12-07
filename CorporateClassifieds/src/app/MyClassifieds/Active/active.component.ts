import { Component, OnInit } from '@angular/core';
import { AppService } from '../AppService';
import { ViewModel } from '../Models/ViewModel';
import { CategoryModel } from "../Models/CategoryModel";

@Component(
  {
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls : ['./active.component.css']
  }
)

export class ActiveComponent implements OnInit {

  ads: ViewModel[];
  universal: ViewModel[];
  category: CategoryModel[];
  dropdata;
  view;
   
  constructor(private service: AppService) {}

  ngOnInit() {

    this.ads = [new ViewModel()]


    this.service.getCategories().subscribe((res: CategoryModel[]) => {

      this.category = res;

    });

    this.service.getClassifieds().subscribe((res: ViewModel[]) => {
      this.ads = res;
      this.universal = res;
    });

    this.view = false;

    this.dropdata = {
      type: 'Ad Type',
      category: 'Category',
      location: 'Location',
      posted: 'Posted'
    }

  }

  list() {

    var list = document.getElementById("list");
    var grid = document.getElementById("grid");

    grid.className = grid.className.replace("text-color", " ");
    list.className = list.className + " text-color";

    this.view = true;
    
  }

  grid() {
    var list = document.getElementById("list");
    var grid = document.getElementById("grid");

    list.className = list.className.replace("text-color", " ");
    grid.className = grid.className + " text-color";

    this.view = false;

  }

  change(id) {
    var dropdown = document.getElementsByClassName("dropdown-item");

    var query = dropdown[id].innerHTML;

    if (id < 3) {
      this.dropdata.type = query;
      this.ads = this.universal.filter((ad) => ad.details.type == query);
    }
    
    else if (id >= 6 && id < 9) {
      this.dropdata.posted = query;
    }
    else
      this.dropdata.location =query;
  }

  reset() {
    this.dropdata = {
      type: 'Ad Type',
      category: 'Category',
      location: 'Location',
      posted: 'Posted'
    }

    this.ads = this.universal;
  }


  dropChange(category: CategoryModel) {

    this.dropdata.category = category.name;

    this.ads = this.universal.filter((ad) => ad.details.category == category.Id.toString());

  }


}
