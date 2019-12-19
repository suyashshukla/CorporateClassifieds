import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/Models';
import { AppService } from '../AppService';


enum DropdownSegments {
  Type,
  Category,
  Time,
  Location,
  Universal
}


@Component({
  selector: 'app-classified-drop-down',
  templateUrl: './classified-drop-down.component.html',
  styleUrls: ['./classified-drop-down.component.css']
})


export class ClassifiedDropDownComponent implements OnInit {

  @Output() list = new EventEmitter();
  @Output() grid = new EventEmitter();
  @Output() adSource = new EventEmitter();

  dropData;
  categoryCount;
  categories: Category[];



  constructor(private classifiedService: AppService) { }

  ngOnInit() {
    this.classifiedService.getCategories().subscribe(res => {
      this.categories = res;
      this.categoryCount = res.length;
    })

    this.dropData = {
      type: 'Ad Type',
      category: 'Category',
      location: 'Location',
      posted: 'Posted'
    }
  }

  toggleList() {

    var list = document.getElementById("list");
    var grid = document.getElementById("grid");

    grid.className = grid.className.replace("text-color", " ");
    list.className = list.className + " text-color";

    this.list.emit();

  }

  toggleGrid() {
    var list = document.getElementById("list");
    var grid = document.getElementById("grid");

    list.className = list.className.replace("text-color", " ");
    grid.className = grid.className + " text-color";

    this.grid.emit();

  }

  change(id) {
    var dropdown = document.getElementsByClassName("dropdown-item");

    var query = dropdown[id].innerHTML;


    if (id < 3) {
      this.dropData.type = query;
      this.adSource.emit({ query: query, type: DropdownSegments.Type });
    }

    else if (id >= 3 && id < 6) {

      id = id + this.categoryCount;
      query = dropdown[id].innerHTML;

      this.dropData.posted = query;
    }

    else {

      id = id + this.categoryCount;
      query = dropdown[id].innerHTML;

      this.dropData.location = query;

    }

  }

  reset() {
    this.dropData = {
      type: 'Ad Type',
      category: 'Category',
      location: 'Location',
      posted: 'Posted'
    }
    this.adSource.emit({ query: '', type: DropdownSegments.Universal });
  }


  dropChange(category: Category) {
    this.dropData.category = category.name;
    this.adSource.emit({
      query: category.Id, type: DropdownSegments.Category
    })
  }




}
