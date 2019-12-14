import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbox-data',
  templateUrl: './inbox-data.component.html',
  styleUrls: ['./inbox-data.component.css']
})
export class InboxDataComponent implements OnInit {

  @Input() inbox;

  constructor() { }

  ngOnInit() {
  }

}
