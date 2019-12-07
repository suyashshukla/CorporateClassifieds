import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ViewModel } from "../Models/ViewModel";
import { AppService } from "../AppService";
import { CategoryModel } from '../Models/CategoryModel';

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

  formData = new ViewModel();
  category : CategoryModel[];
 
  typeChange(id) {

    var button = document.getElementsByClassName("dropdown-item")[id];

    if (id < 3)
      this.formData.details.type = button.innerHTML;
    else
      this.formData.details.category = button.innerHTML;

  }

  dropChange(category: CategoryModel) {

    this.formData.details.category = category.Id+"";

  }

  submitData() {

    var date = new Date();

    var timestamp = date.getFullYear() + "" +
      (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + "" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    
    this.formData.timeinfo.date = this.service.getDate(timestamp);
    this.formData.timeinfo.expiry = this.service.getExpiry(timestamp, this.formData.timeinfo.validity);
     
       
    this.service.getClassifieds().subscribe((res: ViewModel[]) => {

      this.formData.Id = res.length.toString();

      this.service.getUsers().subscribe((res) => {
        this.formData.userdata.name = res["results"][0]["name"]["first"];
        this.formData.userdata.pic = res["results"][0]["picture"]["thumbnail"];

        this.formData.price = this.adData.value.price;
        this.formData.title = this.adData.value.title;
        this.formData.description = this.adData.value.description;
        this.formData.details.offers = "0";
        this.formData.details.comments = "0";
        this.formData.thumbnail = "https://picsum.photos/seed/" + this.formData.description+"/300/400";

        this.service.postClassifieds(this.formData);
      
        console.log(this.formData);
        this.formData = new ViewModel();

        this.adData.reset();

    })
    });    
  }
  
  ngOnInit() {
    this.service.getCategories().subscribe((res: CategoryModel[]) => {
      this.category = res;
    });


  }

}
