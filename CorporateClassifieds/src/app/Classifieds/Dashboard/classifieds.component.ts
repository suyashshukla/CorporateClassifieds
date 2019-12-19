import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Shared/AppService';
import { Category, Classified,} from "../../Models";
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

  adData: Classified[];
  offerData: Offers = new Offers();

  universal: Classified[];
  category: Category[];
  dropdata;
  view;
  offer: boolean;
  activeAd: Classified;
  categoryCount: number;

  constructor(private service: AppService,private inboxService: InboxService) { }

  ngOnInit() {
    this.offer = false;
    this.adData = [new Classified()]


    this.service.getCategories().subscribe((res: Category[]) => {
      this.category = res;
      this.categoryCount = res.length;
    });

    this.service.getClassifieds().subscribe((res: Classified[]) => {
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


}
