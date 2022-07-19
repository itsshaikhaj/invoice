import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://freeinvoice.rajnikantmanani.in/';
  constructor(
    public http: HttpClient,
  ) { }

  uploadVideos(data: any) {
    return this.http
      .post(this.url + "getUserCustore", data)
      .pipe(map((results) => results));
  }

  // CATEGORIES APIs

  getUsers() {
    return this.http
      .get(this.url + "getUserCustore")
      .pipe(map((results) => results));
  }

  getCustomers() {
    return this.http
      .get(this.url + "getAllCustomer")
      .pipe(map((results) => results));
  }
}
