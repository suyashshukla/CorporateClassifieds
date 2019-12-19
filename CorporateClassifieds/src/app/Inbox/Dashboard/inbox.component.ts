import { Component, OnInit } from '@angular/core';
import { InboxService } from '../InboxService';
import { Offers } from 'src/app/Models/Offers';

@Component({
  selector: 'inbox-component',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {

  offers: Offers[];
  constructor(private service: InboxService) {
  }

  ngOnInit() {

    this.service.refreshData.subscribe(res => {
      console.log("Printing Again...");
      this.service.getOffers().subscribe(res => {
        this.offers = res;
      });
    })

    this.service.getOffers().subscribe(res => {
      this.offers = res;
    });
  }

  deleteOffer(offer:Offers) {

    this.service.deleteOffer(offer.id);

  }

}
