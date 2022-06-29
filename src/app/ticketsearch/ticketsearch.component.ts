import { Component, OnInit } from '@angular/core';
import { TicketService } from '../Services/ticket.service';

@Component({
  selector: 'app-ticketsearch',
  templateUrl: './ticketsearch.component.html',
  styleUrls: ['./ticketsearch.component.css']
})
export class TicketsearchComponent implements OnInit {

  
  ticket:any
  ticketpnr:any
  presentDate:any= new Date()
  constructor(private ticketservice :TicketService ) { }

  ngOnInit(): void {
    this.presentDate= new Date()
  }
getticketbyemailid(email:any)
{
this.ticketservice.getairlinebyno(email) .subscribe(data => {
console.log(data)
this.ticket=data;

});
}
getticketbypnr(pnr:any)
{
this.ticketservice.getticketbypnr(pnr) .subscribe(data => {
console.log(data)
this.ticketpnr=data;
console.log(this.ticketpnr)
});
}

cancelticket(pnr:any)
{
  alert("Cancelled Successfully!")
this.ticketservice.cancelticket(pnr).subscribe(data => {
  
// console.log(JSON.stringify(data))

// this.ticketservice.seatcancel().subscribe(dt=>
//   console.log(dt)) 
});


// this.ticketservice.seatcancel().subscribe(dt=>
//   console.log(dt))

}

downloadticket(pnr:any)
{
  alert("Downloaded Successfully!")
  this.ticketservice.downloadticket(pnr) .subscribe(data => {
    console.log(data)
    
   
    });

}





}
