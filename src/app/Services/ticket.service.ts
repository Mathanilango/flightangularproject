import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl : string;
  pnrUrl:string;
  constructor(private http: HttpClient) {
    //this.baseUrl = 'http://localhost:8000/searchemailid?emailid=matha';
    this.baseUrl = 'http://localhost:8000/searchemailid?emailid='; 
    this.pnrUrl='http://localhost:8000/searchticket?pnrno='
  }
    getairlinebyno(airline:any): Observable<any> {
      const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
    } 
      return this.http.get(this.baseUrl+airline,{'headers':headers} )
    }
    getticketbypnr(airline:any): Observable<any> {
      const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
} 
    console.log(this.pnrUrl+airline)
      return this.http.get(this.pnrUrl+airline,{'headers':headers} )
    }

    bookticket(passgnr:any[]) { {
        const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
      } 
       console.log(passgnr)
      const ticketDto= JSON.stringify(passgnr)
      //alert(ticketDto)
       console.log('http://localhost:8000/bookticket?',{'ticketDtos':ticketDto})
      return this.http.post('http://localhost:8000/bookticket?',  {ticketDtos:passgnr},{'headers':headers,responseType: "text"});
  }
}
cancelticket(passgnr:any) { 
  const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
} 
 console.log(passgnr)
 console.log(headers)

//alert(ticketDto)
 
return this.http.post('http://localhost:8000/cancelticket?pnrno='+ passgnr,null,{'headers':headers});

}
  seatcount(){
   // alert("seatcount")
    const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
      } 
       
      
      return this.http.get('http://localhost:8000/Seatcount',{'headers':headers});
  }
    

    seatcancel(){
      // alert("seatcount")
       const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
         } 
          
         
         return this.http.get('http://localhost:8000/Seatcancel',{'headers':headers});
     }

     downloadticket(pnr:any){
      // alert("seatcount")
       const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`
         } 
          
         
         return this.http.post('http://localhost:8000/downloadticket?pnrno='+pnr,null,{'headers':headers});
     }
       }



