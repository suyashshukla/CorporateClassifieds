import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})



export class SliderComponent implements OnInit {

  pics: {url}[];
  index: number;
  display;

  constructor() {

    this.index = 0;


    this.pics = [
      {
      url: "https://media.zigcdn.com/media/model/2018/Oct/front-left-view-1328917438_930x620.jpg"
    },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/head-light-70934506_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/speedometer-2035803940_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/engine-1415165289_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/exhaust-view-484291710_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/rear-suspension-view-755399151_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/self-starter-button-561912437_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/rear-indicator-view-1614735043_930x620.jpg"
      },
      {
        url: "https://media.zigcdn.com/media/model/2018/Oct/front-tyre-view-610778142_930x620.jpg"
      }
    ];
    
    this.display = this.pics[this.index].url;

  }

  increment() {
    if (this.index+1 != this.pics.length)
      this.index++;

    this.display = this.pics[this.index].url;
  }
   
  decrement() {
    if (this.index!=0)
      this.index--;

    this.display = this.pics[this.index].url;
  }

  picClick(pic) {
    this.display = pic.url;

    this.index = this.pics.indexOf(pic);
  }

  ngOnInit() {
  }

}
