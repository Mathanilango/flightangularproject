import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Register } from '../Models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  baseUrl : string;
  
  constructor(private http: HttpClient) {
   //this.baseUrl = 'http://localhost:8000/searchemailid?emailid=matha';
   this.baseUrl = 'http://localhost:8000/Register';
    
   }
   addPerson(person:Register): Observable<any> {
    
    return this.http.get(this.baseUrl )
  }
  private extractData(res: any) {
    let body = res;
    return body;
  }
  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  } 
  newregister(usr:Register): Observable<any> {
    //const headers = {'accept': 'text/plain', 'content-type': 'application/json'}  
    //'Access-Control-Allow-Origin': 'http://localhost:5000/User2',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
     const headers = {'Content-Type': 'application/json',
    }  
    const httpOptions = {
      headers : ({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
      })
      }
    const body=JSON.stringify(usr);
    console.log(body)
    
    return this.http.post(this.baseUrl , usr,{'headers':headers,responseType: "text"}).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    );
    
  }
  
}
