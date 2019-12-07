import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../MyClassifieds/AppService';
import { CategoryModel } from '../MyClassifieds/Models/CategoryModel';
import { ViewModel } from '../MyClassifieds/Models/ViewModel';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  @Input() ad: ViewModel;
  category = new CategoryModel();

  constructor(
  private service : AppService) { }

  ngOnInit() {
    this.service.getCategory(Number(this.ad.details.category)).subscribe((res) => {
      this.category = res;
    });
  }

}
