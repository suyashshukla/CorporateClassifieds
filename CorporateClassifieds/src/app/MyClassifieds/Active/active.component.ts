import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Shared/AppService';
import { Category, Classified, AdDetails } from "../../Models";
import { Offers } from 'src/app/Models/Offers';
import { InboxService } from 'src/app/Inbox/InboxService';

@Component(
  {
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.css']
  }
)

export class ActiveComponent implements OnInit {

  adData: Classified[];
  universal: Classified[];
  category: Category[];
  dropdata;
  view;
  offerData: Offers = new Offers();
  offer: boolean;
  activeAd: Classified;
  categoryCount: number;

  constructor(private classifiedsService: AppService,
    private inboxService: InboxService
  ) { }

  ngOnInit() {
    this.offer = false;
    this.adData = [new Classified()]


    this.classifiedsService.getCategories().subscribe((res: Category[]) => {
      this.category = res;
      this.categoryCount = res.length;
    });

    this.classifiedsService.getClassifieds().subscribe((res: Classified[]) => {
      this.adData = res;
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
      this.adData = this.universal.filter((ad) => ad.details.type == query);
    }

    else if (id >= 3 && id < 6) {

      id = id + this.categoryCount;
      query = dropdown[id].innerHTML;

      this.dropdata.posted = query;
    }

    else {
      id = id + this.categoryCount;
      query = dropdown[id].innerHTML;

      this.dropdata.location = query;
    }

  }

  reset() {
    this.dropdata = {
      type: 'Ad Type',
      category: 'Category',
      location: 'Location',
      posted: 'Posted'
    }

    this.adData = this.universal;
  }


  dropChange(category: Category) {
    this.dropdata.category = category.name;
    this.adData = this.universal.filter((ad) => ad.details.category == category.Id.toString());
  }

}
