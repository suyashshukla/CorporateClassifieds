import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor() { }

  adData = new FormGroup({
    type: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    title: new FormControl(''),
    decription: new FormControl('')
  });

 
  typeChange() {
    var button = document.getElementById("typeButton");

  }

  


  ngOnInit() {
  }

}
