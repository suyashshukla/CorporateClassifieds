import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offers } from '../Models/Offers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InboxService {

  @Output() refreshData = new EventEmitter();

  constructor(private http: HttpClient) {}

  refreshList() {
    this.refreshData.emit();
  }

  getOffers(): Observable<Offers[]> {
    return this.http.get<Offers[]>('/api/offers');
  }

  postOffers(offer: Offers) {
    return this.http.post('./api/offers',offer).subscribe(res => {
      console.log("Offer : Added");
    });
  }

  deleteOffer(id) {
    return this.http.delete('./api/offers/'+id).subscribe(res => {
      console.log("Offer : Deleted");
      this.refreshList();
    })
  }
  
}
