import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../MyClassifieds/AppService';
import { CategoryModel } from '../MyClassifieds/Models/CategoryModel';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  @Input() ad;
  category: CategoryModel;

  constructor(
  private service : AppService) { }

  ngOnInit() {
    this.service.getCategory(+this.ad.category).subscribe((res) => {
      this.category = res;
    });
  }

}
