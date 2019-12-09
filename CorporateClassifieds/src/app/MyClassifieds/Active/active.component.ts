import { Component, OnInit } from '@angular/core';
import { AppService } from '../AppService';
import { Classified } from '../Models/ViewModel';
import { Category } from "../Models/CategoryModel";

@Component(
  {
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls : ['./active.component.css']
  }
)

export class ActiveComponent implements OnInit {

  ads: Classified[];
  universal: Classified[];
  category: Category[];
  dropdata;
  view;
   
  constructor(private service: AppService) {}

  ngOnInit() {

    this.ads = [new Classified()]


    this.service.getCategories().subscribe((res: Category[]) => {

      this.category = res;

    });

    this.service.getClassifieds().subscribe((res: Classified[]) => {
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


  dropChange(category: Category) {

    this.dropdata.category = category.name;

    this.ads = this.universal.filter((ad) => ad.details.category == category.Id.toString());

  }


}
