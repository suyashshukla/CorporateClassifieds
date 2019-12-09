import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../AppService';
import { Category } from '../Models/CategoryModel';
import { Classified } from '../Models/ViewModel';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  @Input() ad: Classified;
  category = new Category();

  constructor(
  private service : AppService) { }

  ngOnInit() {
    this.service.getCategory(Number(this.ad.details.category)).subscribe((res) => {
      this.category = res;
    });
  }

}
