import { Component, OnInit } from '@angular/core';
import { AppService } from '../AppService';
import { Ad } from '../AdModel';

@Component(
  {
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls : ['./active.component.css']
  }
)

export class ActiveComponent implements OnInit {

  ads: Ad[];

  constructor(private service: AppService) {}

  ngOnInit() {

    this.service.getClassifieds().subscribe((res:Ad[])=> {
      this.ads = res;
    });


  }


}
