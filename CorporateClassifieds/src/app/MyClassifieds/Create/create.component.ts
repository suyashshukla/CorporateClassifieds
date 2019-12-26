import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Classified } from "../../Models/ViewModel";
import { AppService } from "../../Shared/AppService";
import { Category } from '../../Models/CategoryModel';

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
    price: new FormControl('10', [Validators.required, Validators.minLength(1), Validators.min(10)]),
    title: new FormControl('Title for the Classified', [Validators.required]),
    description: new FormControl('Description for the Classified', [Validators.required])
  });

  formData = new Classified();
  category : Category[];
 
  typeChange(id) {

    var button = document.getElementsByClassName("dropdown-item")[id];

    if (id < 3)
      this.formData.details.type = button.innerHTML;
    else
      this.formData.details.category = button.innerHTML;

  }

  dropChange(category: Category) {

    this.formData.details.category = category.name;

  }

  submitData() {

    var date = new Date();

    var timestamp = date.getFullYear() + "" + this.service.normalize(date.getMonth()+1) + "" + this.service.normalize(date.getDate());
    
    this.formData.timeinfo.date = this.service.getDate(timestamp);
    this.formData.timeinfo.expiry = this.service.getExpiry(timestamp, this.formData.timeinfo.validity);
     
       
    this.service.getClassifieds().subscribe((res: Classified[]) => {

      this.formData.id = res.length.toString();

      this.service.getUsers().subscribe((res) => {
        this.formData.userdata.name = res["results"][0]["name"]["first"];
        this.formData.userdata.pic = res["results"][0]["picture"]["thumbnail"];

        this.formData.price = this.adData.value.price;
        this.formData.title = this.adData.value.title;
        this.formData.description = this.adData.value.description;
        this.formData.details.offers = "0";
        this.formData.details.comments = "0";
        this.formData.details.category = this.category[this.category.findIndex(c => c.name == this.formData.details.category)].Id+"";
        this.formData.thumbnail = "https://picsum.photos/seed/" + this.formData.title+"/300/400";
        
        this.service.postClassifieds(this.formData);

        console.log(timestamp);
        this.formData = new Classified();

        this.adData.reset();

    })
    });    
  }
  
  ngOnInit() {
    this.service.getCategories().subscribe(res => {
      this.category = res;
    });

    this.formData.details.category = "Select Category";
    this.formData.details.type = "Select Ad Type";
  }

  get price() {
    return this.adData.get('price');
  }

}
