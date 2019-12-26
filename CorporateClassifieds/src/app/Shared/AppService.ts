import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Classified,Category,Offers } from '../Models/';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  @Output() refreshList = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }


  getClassifieds(): Observable<Classified[]> {
    return this.http.get <Classified[]>("/api/classifieds");
  }

  postClassifieds(classified: Classified) {
    this.http.post("/api/classifieds", classified).subscribe(
      (res: Classified) => {
        console.log(res);
      })
  }

  putClassifieds(classified: Classified) {
    this.http.put("/api/classifieds", classified).subscribe(
      (res: Classified) => {
        window.alert("Success!");
      });
  }

  deleteClassifieds(id: string) {
    return this.http.delete("/api/classifieds/" + id);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("./api/category");
  }

  getCategory(id) {
    return this.http.get<Category>("./api/category/" + id);
  }


  getUsers() {
    return this.http.get("https://randomuser.me/api/");
  }


  getExpiry(timestamp: string, expiry: number): string {

    var initial: number = +timestamp;
    var increment: number = expiry;

    var year: number = Number(timestamp.substring(0, 4));
    var month: number = Number(timestamp.substring(4,6));
    var date: number = Number(timestamp.substring(6));

    if (date + increment > 30) {
      date = (date + increment) % 30;
      if (date == 0)
        date = 30;

      increment = Math.floor(increment / 30);


      if (month + increment > 12) {
        month = (month + increment) % 12;
        if (month == 0)
          month = 12;

        increment = Math.floor(increment / 12);

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

  getDate(timestamp: string): string {

    var year: number = +timestamp.substring(0, 4);
    var month: number = +timestamp.substring(4, 6);
    var date: number = +timestamp.substring(6);

    return (this.normalize(date) + "/" + this.normalize(month) + "/" + this.normalize(year));
  }

  normalize(num: number): string {
    return num < 10 ? "0" + num : num + "";
  }

  refreshDB() {
    this.refreshList.emit();
  }

}
