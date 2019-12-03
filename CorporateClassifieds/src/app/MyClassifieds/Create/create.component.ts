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
    price: new FormControl('0'),
    title: new FormControl('Title Of Ad'),
    description: new FormControl('Description of Ad')
  });

  formData = {
    type: 'Select',
    category: 'Select',
    price: '',
    title: '',
    description : ''
  }

 
  typeChange(id) {

    var button = document.getElementsByClassName("dropdown-item")[id];

    if (id < 3)
      this.formData.type = button.innerHTML;
    else
      this.formData.category = button.innerHTML;

  }

  submitData() {

  }
  


  ngOnInit() {
  }

}
