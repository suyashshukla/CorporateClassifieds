import { Component, OnInit, Input } from '@angular/core';
import { Offers, Classified } from 'src/app/Models';
import { AppService } from '../AppService';
import { InboxService } from 'src/app/Inbox/InboxService';


enum DropDownTypes {
  Type,
  Category,
  Time,
  Location,
  Universal
}

@Component({
  selector: 'app-classified-list',
  templateUrl: './classified-list.component.html',
  styleUrls: ['./classified-list.component.css']
})


export class ClassifiedListComponent implements OnInit {

  activeAd: Classified;
  adData: Classified[];
  universalData: Classified[];
  offerFlag: boolean;
  listFlag: boolean;
  offerData: Offers = new Offers();

  constructor(
    private classifiedsService: AppService,
    private inboxService: InboxService
  ) { }

  ngOnInit() {

    this.classifiedsService.refreshList.subscribe(res => {
      this.updateClassifiedsList();
    });

    this.adData = [new Classified()];
    this.listFlag = false;
    this.updateClassifiedsList();
    

  }

  updateClassifiedsList() {
    this.classifiedsService.getClassifieds().subscribe(res => {
      this.adData = res;
      this.universalData = res;
    });
  }


  makeOffer(ad: Classified) {
    this.offerFlag = true;
    this.activeAd = ad;
  }


  confirmOffer() {

    this.offerFlag = false;

    var d = new Date();

    var timestamp = d.getFullYear() + "" + d.getMonth() + 1 + "" + d.getDate();

    this.offerData.timestamp = this.classifiedsService.getDate(timestamp);
    this.offerData.adData = this.activeAd;

    this.classifiedsService.getUsers().subscribe((res) => {

      this.offerData.userData.name = res["results"][0]["name"]["first"];
      this.offerData.userData.pic = res["results"][0]["picture"]["thumbnail"];


      this.inboxService.getOffers().subscribe(res => {

        if (res.length == 0)
          this.offerData.id = 0;
        else
          this.offerData.id = res[res.length - 1]['id'] + 1;

        this.inboxService.postOffers(this.offerData);

        var classified = this.activeAd;
        classified.details.offers = (+classified.details.offers + 1).toString();
        classified.details.comments = (+classified.details.comments + 1).toString();

        this.classifiedsService.putClassifieds(classified);
      });

    });
  }


  updateList(event) {

    console.log(event);
    console.log(this.activeAd);
    var query = event.query;

    if (event.type == -1) {
      this.adData = this.universalData.filter((data) => data.title.toLowerCase().indexOf(query.toString()) >= 0);
    }

    else {
      switch (event.type) {

        case DropDownTypes.Type:
          console.log("event triggered!");
          this.adData = this.universalData.filter((data) => data.details.type == query);
          break;
        case DropDownTypes.Universal:
          this.adData = this.universalData;
          break;
        case DropDownTypes.Category:
          this.adData = this.universalData.filter((data) => data.details.category == query);
          break;
      }
    }

  }


  deleteAd(ad: Classified) {

    this.classifiedsService.deleteClassifieds(ad.id).subscribe(res => {
      this.classifiedsService.refreshDB();
    });
   

  }

}
