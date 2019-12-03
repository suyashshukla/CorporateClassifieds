import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../MyClassifieds/AdModel';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class Advertisement implements OnInit {

  @Input() ad: Ad;

  constructor() { }

  ngOnInit() {

    

  }

}
