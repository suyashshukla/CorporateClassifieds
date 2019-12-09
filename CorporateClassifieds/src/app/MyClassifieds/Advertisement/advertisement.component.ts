import { Component, OnInit, Input } from '@angular/core';
import { Classified } from '../Models/ViewModel';
import { AppService } from '../AppService';
import { Category } from '../Models/CategoryModel';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class Advertisement implements OnInit {

  @Input() ad: Classified;
  category = new Category();

  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
    
    this.service.getCategory(this.ad.details.category).subscribe((res) => {
      this.category = res;
    });
  }
}

