import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Ad } from './AdModel';


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

  postClassifieds(classified: Ad) {
    this.http.post("/api/classifieds", classified).subscribe(
      (res: Ad) => {
        console.log(res);
      })
  }

  getUsers() {
    return this.http.get("https://randomuser.me/api/");
  }
 


}
