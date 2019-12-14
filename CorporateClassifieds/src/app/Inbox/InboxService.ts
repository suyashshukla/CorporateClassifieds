import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offers } from '../Models/Offers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InboxService {

  constructor(private http: HttpClient) {}


  getOffers(): Observable<Offers[]> {
    return this.http.get<Offers[]>('/api/offers');
  }

  postOffers(offer: Offers) {
    return this.http.post('./api/offers',offer).subscribe(res => {
      console.log("Successful");
    });
  }


}
