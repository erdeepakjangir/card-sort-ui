import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  constructor(private httpClient: HttpClient) { }

  getCardList() {
    return this.httpClient.get(environment.baseURL + 'card');
  }
  performSort(data: any) {
    return this.httpClient.post(environment.baseURL + 'card', data);
  }
}