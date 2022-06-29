import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AirlineService } from '../Services/airline.service';
import { DatepickerViewModel } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { passanger } from '../Models/Passenger';
import {formatDate } from '@angular/common';
import { TicketService } from '../Services/ticket.service';
@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  passgn= new passanger()
  registerForm:FormGroup;
  frmdate:any
  todate:any
  flight:any
  dataarray:any[]=[]
  tt:any
  txt:any
  cndt:boolean
  seattype:any
  nbseat:any
  bseat:any
  showMsg:boolean
  msgtxt:any
  dateofjourney:any
  startdt:any
  enddt:any
  FlightId:any
  AirlineId:any
  email:any
  bseatcost:any
  Nbseatcost:any
  amntpaid:any
  cpncode:any
  cpnamnt:any
  txtcpnamnt:any
  cpnmsg:any
  paidamnt:any
  vcpnamnt:any
  constructor(private fb:FormBuilder, private airservice: AirlineService, 
    private datepipe: DatePipe,private mdservice: NgbModal, private tickserv:TicketService) {

    this.registerForm = this.fb.group({
      FromPlace: ['' ],
      ToPlace:[''],
      StartDate: ['' ],
      EndDate: ['']
    
    });
    this.cndt=false
    this.showMsg=false
    // this.passgn = this.fb.group({
    //   Passenger: ['' ],
    //   Age:[''],
    //   Gender: ['' ],
    //   Meal: ['']
    
    // });
   }

  ngOnInit(): void {
    //this.passgn=new passanger()
    //this.passgn.seat=4
   //this.dataarray.push(this.passgn)
   this.tt=''
   this.seattype=''
   this.cndt=false
   this.msgtxt=''
   this.showMsg=false
   this.dateofjourney=''
  }
  openbooktckModal(targetModal:any, user:any) {
    // this.passgn=new passanger()
    // this.dataarray.push(this.passgn)
    console.log(user)
    this.tt=''
   this.seattype=''
   this.cndt=false
   this.dateofjourney=''
   this.dataarray=[]
    this.txt="Add Passenger Details"
   this.msgtxt=''
   this.showMsg=false
   this.bseatcost=''
   this.Nbseatcost=''
   this.cpncode=''
   this.cpncode=''
   this.txtcpnamnt=''
   this.cpnmsg=''
   this.cpnamnt=''
   this.vcpnamnt=''
   this.cpnmsg=''
   this.amntpaid=''
   this.cpnamnt=''
   this.paidamnt=''
  
   this.email=''
     // this.fltno=user.flightnumber
     //this.bseat=user
     this.FlightId=user.flightnumber
     this.AirlineId=user.airlineId
     //this.seatbooked=user
     this.bseat=user.businessSeat
     this.nbseat=user.nonBusinessSeat
     this.startdt= user.startDate
     this.enddt=user.endDate
     this.bseatcost=user.businessSeatCost
     this.Nbseatcost=user.nonBusinessSeatCost
     this.cpncode=user.couponcode
     this.vcpnamnt=user.couponcodeamt
    // this.tickserv.seatcount().subscribe(data=>{
    //   console.log(data)})
  //   this.FlightForm.patchValue({
  //     AirlineId:user.airlineId,
  //     FromPlace:user.fromPlace ,
  //     ToPlace:user.toPlace ,
  //     StartDate:user.startDate ,
  //     EndDate:user.endDate ,
  //     ScheduleDays:user.scheduleDays,
  //     Instrument:user.instrument ,
  //     BusinessSeat:user.businessSeat,
  //     NonBusinessSeat:user.nonBusinessSeat ,
  //     TicketCost:user.ticketCost 
  //   })
  //  // console.log(this.FlightForm)
    this.mdservice.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'xl'
    });
   
   }
   ngcnhg()
   {
     this.passgn.seattype=this.seattype
     
    
   }
   ngcnhg1()
   {
    this.dataarray=[]
    this.msgtxt=''
    this.cpnmsg=''
   this.cpnamnt=''
   this.cpnmsg=''
   this.amntpaid=''
  this.paidamnt=''
   this.txtcpnamnt=''
   console.log(this.cpncode)
    this.startdt=formatDate(this.startdt, 'yyyy-MM-dd', 'en-US');
    this.enddt=formatDate(this.enddt, 'yyyy-MM-dd', 'en-US');
    this.dateofjourney=formatDate(this.dateofjourney, 'yyyy-MM-dd', 'en-US');
      this.showMsg=false
    if(this.startdt <= this.dateofjourney && this.enddt >= this.dateofjourney)
    {

    
    if(this.seattype=="Bussiness" && this.bseat<this.tt){
      this.cndt=false
      this.msgtxt="Only "+this.bseat+" seats are availabel in Bussiness class, Please select valid seats "
      this.showMsg=true

    }
    if(this.seattype=="Non-Bussiness" && this.nbseat<this.tt)
    {
      this.cndt=false
    this.msgtxt="Only "+this.nbseat+" seats are availabel in Non-Bussiness class, Please select valid seats "
    this.showMsg=true
    }
    if(this.seattype=="Bussiness" && this.bseat>=this.tt)
     {
      this.showMsg=false;
      this.msgtxt=''
      this.cndt=true
      this.amntpaid= this.tt*this.bseatcost
      this.paidamnt=this.amntpaid
      for (let i = 0; i < this.tt; i++) {
       this.passgn=new passanger()
       this.passgn.seattype=this.seattype
       this.passgn.Dateofjourney= this.dateofjourney
       this.passgn.AirlineId=this.AirlineId
       this.passgn.FlightId=this.FlightId
       this.passgn.BookedSeats=this.tt
       this.passgn.Email=this.email
       this.dataarray.push(this.passgn);
     }
     }
     if(this.seattype=="Non-Bussiness" && this.nbseat>=this.tt)
     {
      this.cndt=true
      this.showMsg=false;
      this.msgtxt=''
      this.amntpaid= this.tt*this.Nbseatcost
      this.paidamnt=this.amntpaid
      for (let i = 0; i < this.tt; i++) {
       this.passgn=new passanger()
       this.passgn.seattype=this.seattype
       this.passgn.Dateofjourney= this.dateofjourney
       this.passgn.AirlineId=this.AirlineId
       this.passgn.FlightId=this.FlightId
       this.passgn.BookedSeats=this.tt
       this.passgn.Email=this.email
       this.dataarray.push(this.passgn);
     }
     }
    }
    else{
      this.cndt=false
      this.msgtxt="Select DateofJourney between "+this.startdt+" to " + this.enddt 
      this.showMsg=true
    }
   }
applycpn()
{
  console.log(this.txtcpnamnt)
  this.cpnamnt=''
if(this.txtcpnamnt === this.cpncode)
{
 this.cpnamnt= this.vcpnamnt
this.paidamnt=this.amntpaid-this.cpnamnt
this.cpnmsg="Code Applied"
}
else{
  this.cpnmsg="Invalid coupon code."
}
}

    WithoutTime(dateTime:any) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}
   closemodel()
   {
     this.mdservice.dismissAll()
   }
  search()
  {
    // this.tickserv.seatcancel().subscribe(data=>
    //   console.log(data))
    
    const val = this.registerForm.value;
    
            console.log(this.frmdate)
              this.airservice.serachflight(val.FromPlace, val.ToPlace,val.StartDate,val.EndDate)
              .subscribe(data => {
                this.flight=data
                console.log(data)
                this.frmdate=''
                this.todate=''
                
              })
  }
 addpassanger()
 {
   this.passgn=new passanger()
  this.dataarray.push(this.passgn)
 }
 onsubmit()
 {
   console.log(this.dataarray)
   

   //this.dataarray[0].amountpaided=this.paidamnt;
   for (let i = 0; i < this.dataarray.length; i++) {
    this.dataarray[i].amountpaided=this.paidamnt;
  }
  // this.tickserv.seatcount().subscribe(data=>
  //   console.log(data))
   console.log(this.dataarray)
   this.tickserv.bookticket(this.dataarray) .subscribe(data => {
    console.log(data)
  // this.tickserv.seatcount().subscribe(data=>
  //     console.log(data))
   this.mdservice.dismissAll()
    // this.search()
   });
    
 }
 removepassenger(index:any)
 {
   this.dataarray.splice(index)
 }
}
