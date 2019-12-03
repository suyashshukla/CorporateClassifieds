import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ad } from "../AdModel";
import { AppService } from "../AppService";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(
    private service: AppService
  ) { }

  adData = new FormGroup({
    price: new FormControl('0'),
    title: new FormControl('Title for the Classified'),
    description: new FormControl('Description for the Classified')
  });

  formData = new Ad();
 
  typeChange(id) {

    var button = document.getElementsByClassName("dropdown-item")[id];

    if (id < 3)
      this.formData.type = button.innerHTML;
    else
      this.formData.category = button.innerHTML;

  }

  submitData() {

    var date = new Date();

    this.formData.timestamp = date.getFullYear() + "" +
      (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + "" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());


    this.service.getClassifieds().subscribe((res:Ad[]) => {
      //this.formData.Id = date.getTime().toString();
      this.formData.Id = res.length.toString();

      this.service.getUsers().subscribe((res) => {
        this.formData.username = res["results"][0]["name"]["first"];
        this.formData.userpic = res["results"][0]["picture"]["thumbnail"];

        this.formData.price = this.adData.value.price;
        this.formData.title = this.adData.value.title;
        this.formData.description = this.adData.value.description;
        this.formData.offers = 0;
        this.formData.comments = "";
        this.formData.thumbnail = "https://picsum.photos/seed/" + this.formData.description+"/200/300";

        this.service.postClassifieds(this.formData);

        console.log(this.formData);

        this.formData = new Ad();

        this.adData.reset();
    })

      
    });

    
  }
  
  ngOnInit() {
  }

}
