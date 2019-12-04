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
  view;



  constructor(private service: AppService) {}

  ngOnInit() {

    this.service.getClassifieds().subscribe((res:Ad[])=> {
      this.ads = res;
    });

    this.view = false;
    
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

  change() {
    var dropdown = document.getElementsByClassName("filter");
  }


}
