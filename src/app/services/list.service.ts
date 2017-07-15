import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ListService {
    baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: Http
  ) { }

lists() {
  return this.httpThang
  .get(this.baseUrl + '/api/lists', 
  {withCredentials: true })
  .toPromise()
  .then( res => res.json());
}

createList(title) {
  return this.httpThang.post(this.baseUrl + '/api/lists', 
{ listTitle: title }, 
{ withCredentials: true }
)
.toPromise()
.then(res => res.json());
}


}