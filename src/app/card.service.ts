import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Card } from './card';

@Injectable()
export class CardService {
  private baseUrl = 'http://prototype.carter-dev.net/fed-test/items.json';  // web api URL
  constructor(private http: Http) { }
  getCards(): Observable<any> {
    return this.http.get(this.baseUrl)
      .map(res => <Card[]> res.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }
}
