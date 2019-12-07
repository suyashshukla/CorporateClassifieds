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

  getExpiry(timestamp: string, expiry: number): string {

    var initial:number = +timestamp;
    var increment:number = expiry;

    var year:number = +(timestamp.substring(0, 4));
    var month:number = +(timestamp.substring(4, 2));
    var date:number = +(timestamp.substring(6, 2));

    if (date + increment > 30) {
      date = (date + increment) % 30;
      if (date == 0)
        date = 30;
      increment = increment / 2;


      if (month + increment > 12) {
        month = (month + increment) % 12;
        if (month == 0)
          month = 12;

        increment = increment / 12;

        if (increment > 0) {
          year = year + increment;
        }

      }
      else {
        month = month + increment;
      }
    }
    else {
      date = date + increment;
    }

    return (this.normalize(date) + "/" + this.normalize(month) + "/" + year);
  }

  getDate(timestamp:string):string {

   var year: string = timestamp.substring(0, 4);
    var month:string = timestamp.substring(4, 2);
    var date:string = timestamp.substring(6, 2);

    return (date + "/" + month + "/" + year);
  }

  normalize(num: number) :string{
    return num < 10 ? "0" + num : num + "";
  }
 


}
