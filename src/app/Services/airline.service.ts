import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airlinedto } from '../DTO/Airlinedto';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  baseUrl : string;
  searchairlineUrl:string
  blockairlineUrl:string
  UnblockairlineUrl:string
  Getallairline:string
  constructor(private http: HttpClient) {
   //this.baseUrl = 'http://localhost:8000/searchemailid?emailid=matha';
   this.baseUrl = 'http://localhost:8000/AddAirline';
    this.searchairlineUrl='http://localhost:8000/Searchairline?airlineno=';
    this.blockairlineUrl='http://localhost:8000/BlockAirline?Flightnumber='
    this.UnblockairlineUrl='http://localhost:8000/UnBlockAirline?Flightnumber='
    this.Getallairline='http://localhost:8000/getallairline'
   }
   getairlinebyno(airline:any): Observable<any> {
    
    return this.http.get(this.searchairlineUrl+airline )
  }
  getallairline(): Observable<any> {
    const header = { Authorization: `Bearer ${localStorage.getItem('token')}` }
    return this.http.get(this.Getallairline,{headers: header } )
  }
  getflight(airno:any): Observable<any> {
    const header = { Authorization: `Bearer ${localStorage.getItem('token')}` }
    return this.http.get('http://localhost:8000/getflight?airlineno='+airno,{headers: header } )
  }
  addnewairline(air:Airlinedto): Observable<any> {
    //const headers = {'accept': 'text/plain', 'content-type': 'application/json'}  
    //'Access-Control-Allow-Origin': 'http://localhost:5000/User2',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
  } 
    const httpOptions = {
      headers : ({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
      })
      }
    const body=JSON.stringify(air);
    console.log(body)
    
    return this.http.post(this.baseUrl , air,{'headers':headers,responseType: "text"})
    
  }
  blockairline(airlineno:any): Observable<any> {
    //const headers = {'accept': 'text/plain', 'content-type': 'application/json'}  
    //'Access-Control-Allow-Origin': 'http://localhost:5000/User2',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
     const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
    }  
    const httpOptions = {
      headers : ({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
      })
      }
    // const body=JSON.stringify(air);
    // console.log(body)
    
    return this.http.post(this.blockairlineUrl+airlineno , null,{'headers':headers,responseType: "text"})
    
  }
  unblockairline(airlineno:any): Observable<any> {
    //const headers = {'accept': 'text/plain', 'content-type': 'application/json'}  
    //'Access-Control-Allow-Origin': 'http://localhost:5000/User2',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
     const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
    }  
    const httpOptions = {
      headers : ({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
      })
      }
    // const body=JSON.stringify(air);
    // console.log(body)
    
    return this.http.post(this.UnblockairlineUrl+airlineno , null,{'headers':headers,responseType: "text"})
    
  }
  serachflight(FromPlace:any , ToPlace:any, StartDate:any,EndDate:any)
  {
    const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
  } 
  var body={FromPlace , ToPlace,StartDate,EndDate}
return this.http.post('http://localhost:8000/searchflight',body,{'headers':headers});
  }
  addflight(AirlineId:any, FromPlace:any , ToPlace:any,StartDate:any,EndDate:any,ScheduleDays:any,
    Instrument:any,BusinessSeat:any,NonBusinessSeat:any,Couponcode:any,
    Couponcodeamt:any,
   BusinessSeatCost:any,
   NonBusinessSeatCost:any) { {
      const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
    } 
      var body={AirlineId, FromPlace , ToPlace,StartDate,EndDate,ScheduleDays,
        Instrument,BusinessSeat,NonBusinessSeat, Couponcode,Couponcodeamt,
        BusinessSeatCost,NonBusinessSeatCost}
    return this.http.post('http://localhost:8000/AddFlight', body,{'headers':headers,responseType: "text"});
}
  }
  updateflight(AirlineId:any, FromPlace:any , ToPlace:any,StartDate:any,EndDate:any,ScheduleDays:any,
    Instrument:any,BusinessSeat:any,NonBusinessSeat:any,Flightnumber:any ,Couponcode:any,    Couponcodeamt:any,
   BusinessSeatCost:any,
   NonBusinessSeatCost:any) { {
      const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
    } 
      var body={AirlineId, FromPlace , ToPlace,StartDate,EndDate,ScheduleDays,
        Instrument,BusinessSeat,NonBusinessSeat,Flightnumber, Couponcode,Couponcodeamt,
        BusinessSeatCost,NonBusinessSeatCost}
    return this.http.post('http://localhost:8000/ScheduleFlight', body,{'headers':headers,responseType: "text"});
}
  }
}