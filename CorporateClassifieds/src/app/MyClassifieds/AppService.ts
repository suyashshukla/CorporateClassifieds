import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { ViewModel } from './Models/ViewModel';
import { CategoryModel } from './Models/CategoryModel';


@Injectable({
  providedIn: "root"
})

export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getClassifieds() {
    return this.http.get("/api/classifieds");
  }

  postClassifieds(classified: ViewModel) {
    this.http.post("/api/classifieds", classified).subscribe(
      (res: ViewModel) => {
        console.log(res);
      })
  }

  getCategories() {
    return this.http.get("./api/category");
  }

  getCategory(id){
    return this.http.get<CategoryModel>("./api/category/"+id);
  }

  getUsers() {
    return this.http.get("https://randomuser.me/api/");
  }
 


}
