import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Shared/AppService';
import { Category, Classified, AdDetails } from "../../Models";
import { Offers } from 'src/app/Models/Offers';
import { InboxService } from 'src/app/Inbox/InboxService';

@Component(
  {
    selector: 'app-classifieds',
    templateUrl: './classifieds.component.html',
    styleUrls: ['./classifieds.component.css']
  }
)

export class ClassifiedsComponent implements OnInit {

  ads: Classified[];
  universal: Classified[];
  category: Category[];
  dropdata;
  view;
  offerData: Offers = new Offers();
  offer: boolean;
  activeAd: Classified;

  constructor(private service: AppService,
    private inboxService: InboxService
  ) { }

  ngOnInit() {
    this.offer = false;
    this.offerData.amount = 1000;
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
      this.dropdata.location = query;
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


  makeOffer(ad: Classified) {
    this.offer = true;
    this.activeAd = ad;
  }

  confirmOffer() {
    this.offer = false;

    var d = new Date();

    var timestamp = d.getFullYear() + "" + d.getMonth() + 1 + "" + d.getDate();

    this.offerData.timestamp = this.service.getDate(timestamp);
    this.offerData.adData = this.activeAd;


    this.service.getUsers().subscribe((res) => {

      this.offerData.userData.name = res["results"][0]["name"]["first"];
      this.offerData.userData.pic = res["results"][0]["picture"]["thumbnail"];


      this.inboxService.getOffers().subscribe(res => {
        this.offerData.id = res.length;

        this.inboxService.postOffers(this.offerData);
      });

    });



  }


}
