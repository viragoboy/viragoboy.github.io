import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  public constructor(private http: HttpClient) {
  }

  public getSomeData(): Observable <any> {
    // get the advice using the preferences url async
    const dataObs = this.http.get('http://64.227.11.143/');
    return dataObs;
  }
}
