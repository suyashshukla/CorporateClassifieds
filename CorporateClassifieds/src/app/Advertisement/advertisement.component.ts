import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from '../MyClassifieds/Models/ViewModel';
import { AppService } from '../MyClassifieds/AppService';
import { CategoryModel } from '../MyClassifieds/Models/CategoryModel';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class Advertisement implements OnInit {

  @Input() ad: ViewModel;
  category = new CategoryModel();

  constructor(
    private service: AppService
  ) { }

  ngOnInit() {

    console.log(this.ad);

    this.service.getCategory(this.ad.details.category).subscribe((res) => {
      this.category = res;
    });
  }
}

