import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  active(id) {

    var item = document.getElementsByClassName("triangle")[id];

    item.className = item.className.indexOf("d-none") >= 0 ? item.className.replace("d-none", "") : item.className;

    var index;

    if (id == 0)
      index = 1;
    else
      index = 0;

    var item = document.getElementsByClassName("triangle")[index];

    item.className = item.className + " d-none ";


  }

}
