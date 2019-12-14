import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Classified } from '../../Models/ViewModel';
import { AppService } from '../AppService';
import { Category } from '../../Models/CategoryModel';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdGridComponent implements OnInit {

  @Input() ad: Classified;
  @Output() clicked = new EventEmitter();

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

