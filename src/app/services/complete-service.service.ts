import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import "rxjs/Rx"
// import "rxjs/add/operator/map"

import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompleteServiceService implements AutoCompleteService {

  labelAttribute = 'name';
  formValueAttribute = 'id';
  public id: any;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': ''
    })
  };
  constructor(private http: HttpClient) {
  
  }




  getResults(keyword:string) {
     console.log(keyword)
     return this.http.get('http://hackzurich2019.klik.mk/getLocations?name=' + keyword).pipe(
        map(
        (result) => {
           console.log(result);
           return result;
        }
     )
     );
  }

  getTagsfromApi(){
   return this.http.post('http://hackzurich2019.klik.mk/getTags', {responseType: 'text'})
   .pipe(
     tap( // Log the result or error
       data => console.log('data', data),
       error => console.log('error', error)
     )
   );
  }

  postFormtoAPI(params) {
    return this.http.post('http://hackzurich2019.klik.mk/getTrips', params, {responseType: 'text'})
   .pipe(
     tap( // Log the result or error
       data => console.log('data', data),
       error => console.log('error', error)
     )
   );
  }

  
}
