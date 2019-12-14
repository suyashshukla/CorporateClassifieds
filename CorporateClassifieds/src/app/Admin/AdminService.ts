import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/CategoryModel';

@Injectable({
  providedIn: 'root'
})

export class AdminService {


  constructor(
    private http: HttpClient
  ) { }

  addCategory(category: Category) {
    return this.http.post("/api/category", category).subscribe(res => {
      window.alert("Success!");
    })
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("/api/category");
  }

}
