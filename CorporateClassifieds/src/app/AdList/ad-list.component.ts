import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  @Input() ad;

  constructor() { }

  ngOnInit() {
  }

}
