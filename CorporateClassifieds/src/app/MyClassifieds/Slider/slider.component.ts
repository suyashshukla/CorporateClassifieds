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
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(0,3) + "/600/400"
    },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(1, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(2, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(3, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(4, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(2, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(3, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(4, 3) + "/600/400"
      },
      {
        url: "https://picsum.photos/id/" + new Date().getTime().toString().substring(1, 3) + "/600/400"
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

    console.log(this.display);

    this.index = this.pics.indexOf(pic);
  }

  ngOnInit() {
  }

}
