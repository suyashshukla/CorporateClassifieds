import { Component, OnInit } from '@angular/core';
import { IconConfig } from '../IconConfig';
import { Category } from 'src/app/Models/CategoryModel';
import { AdminService } from '../AdminService';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  categoryIcons;

  category: Category = new Category();
  constructor(private service: AdminService) {
  }


  ngOnInit() {
    this.categoryIcons = IconConfig;

    this.category.name = "Enter the category name";
  }

  iconSelected(id) {

    var icons = document.getElementsByClassName("category");

    var iconSelected = icons[id];


    for (var i = 0; i < icons.length; i++) {
      var icon = icons[i];
      icon.className = icon.className.replace("border border-success", "  ");
    }

    iconSelected.className = iconSelected.className + " border border-success ";
    this.category.icon = iconSelected.innerHTML;
  }

  addCategory() {

    this.service.getCategories().subscribe(res => {
      this.category.Id = res.length;
      this.service.addCategory(this.category);
    })
  }

}
