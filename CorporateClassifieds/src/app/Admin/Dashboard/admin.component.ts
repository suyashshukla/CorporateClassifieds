import { Component, OnInit } from '@angular/core';
import { IconConfig } from '../IconConfig';

@Component({
selector: 'admin-component',
templateUrl: './admin.component.html',
styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  categoryIcons;

constructor() {
  }


  ngOnInit(){
  this.categoryIcons = IconConfig;
  }

}
