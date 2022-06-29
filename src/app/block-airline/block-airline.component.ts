import { Component, HostListener, OnInit } from '@angular/core';
import { Airlinedto } from '../DTO/Airlinedto';
import { AirlineService } from '../Services/airline.service';
import {  NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { parseJsonText } from 'typescript';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-block-airline',
  templateUrl: './block-airline.component.html',
  styleUrls: ['./block-airline.component.css']
})

export class BlockAirlineComponent implements OnInit {
  
  
  data1:any[]=[]
  searchText:string='' ;
  previous: any;
  Airlinename:Airlinedto
  showdng:boolean
  showMsg:boolean
  isadd:boolean
  data:any
  modalService:any
  txt:any
  FlightForm:FormGroup;
  frmdate:any
  todate:any
  flight:any[]=[]
  flightnumber:any
  

  constructor(private fb:FormBuilder,private airlineservice :AirlineService, private mdservice: NgbModal,private datepipe: DatePipe
    ) { 
    this.Airlinename= new Airlinedto()
    this.showMsg=false
    this.showdng=false
    this.isadd=false
    // this.dateicon=this.dateicon
    this.FlightForm = this.fb.group({
      AirlineId: [this.txt, [Validators.required]],
      FromPlace: ['', [Validators.required]],
      ToPlace: ['', Validators.required],
      StartDate: ['', [Validators.required]],
      EndDate: ['', Validators.required],
      ScheduleDays: ['', [Validators.required]],
      Instrument: ['', Validators.required],
      BusinessSeat: ['', [Validators.required]],
      NonBusinessSeat: ['', Validators.required],
      TicketCost: ['', Validators.required],
      Couponcode:[''],
      Couponcodeamt:[''],
      BusinessSeatCost:['',Validators.required],
      NonBusinessSeatCost:['',Validators.required]

    });
    
  }
  
  // @HostListener('input') oninput() {
  //   this.searchItems();
  // }
  openviewModal(targetModal:any, user:any) {
    this.flightnumber=user.flightnumber
    console.log(targetModal)
    console.log( this.flightnumber)
    this.isadd=false
    this.txt="Schedule Flight"
    const enddt=this.datepipe.transform( user.endDate,'yyyy-MM-dd')
    if(enddt){
        const [year, month, day] = enddt.split('-');
        const obj = { year: parseInt(year), month: parseInt(month), day: 
          parseInt(day.split(' ')[0].trim()) };
          user.endDate = obj;
        }
          const frmdt=this.datepipe.transform( user.startDate,'yyyy-MM-dd')
    if(frmdt){
          const [year1, month1, day1] = frmdt.split('-');
          const obj1 = { year: parseInt(year1), month: parseInt(month1), day: 
            parseInt(day1.split(' ')[0].trim()) };
            user.startDate = obj1;
          }
     // this.fltno=user.flightnumber
    this.FlightForm.patchValue({
      AirlineId:user.airlineId,
      FromPlace:user.fromPlace ,
      ToPlace:user.toPlace ,
      StartDate:user.startDate ,
      EndDate:user.endDate ,
      ScheduleDays:user.scheduleDays,
      Instrument:user.instrument ,
      BusinessSeat:user.businessSeat,
      NonBusinessSeat:user.nonBusinessSeat ,
      TicketCost:user.ticketCost 
    })
    console.log(this.FlightForm)
    this.mdservice.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'md'
    });
   
   }
  openModal(targetModal:any, user:any) {
    console.log(targetModal)
    console.log(user)
    this.isadd=true
    this.txt="Add new Flight"
    this.FlightForm.patchValue({
      AirlineId:user
    })
    this.mdservice.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'md'
    });
   
   }
   openflightModal(targetModal:any, user:any) {
    console.log(targetModal)
    console.log(user)
    this.flight=[]
   this.airlineservice.getflight(user).subscribe(data => {
    console.log(data)
    
    this.flight=data;
   
  }) 
    this.mdservice.open(targetModal, {
     centered: false,
     backdrop: 'static',
     size: 'lg'

    });
   
   }
  ngOnInit(): void {
    this.getallairline();
  }
  open(content:any) {
    this.modalService.open(content)
  }
  newairline()
  {
    this.airlineservice.addnewairline(this.Airlinename)
      .subscribe(data => {
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(data.json(), null, 4));
        console.log(data)
        
         if(data=='create Failed')
         {
       this.showdng=true;  
         }
         if(data=='Created Sucessfully'){
           this.showMsg=true;
         }
         
      this.Airlinename= new Airlinedto();
      this.getallairline();  
      })  
      
  }
  getallairline()
  {
    this.airlineservice.getallairline()
      .subscribe(data => {
        console.log(data)
        this.data1=data
      })
  }
  searchairline(airlineno:any)
  {
    console.log(airlineno);
    this.airlineservice.getairlinebyno(airlineno)
      .subscribe(data => {
        console.log(data)
        
        this.data1=data;
       
      }) 

  }
  blockairline(airlineno:any)
  {
    console.log(airlineno);
    this.airlineservice.blockairline(airlineno)
      .subscribe(data => {
        console.log(data)
        this.getallairline()
      }) 
      

  }
  Unblockairline(airlineno:any)
  {
    console.log(airlineno);
    this.airlineservice.unblockairline(airlineno)
      .subscribe(data => {
        console.log(data)
        this.getallairline()
      }) 
     
  }
  public updateSelectedDate1(date: NgbDate) {
    // Use this method to set any other date format you want 
    // this.FlightForm.patchValue({
    //   StartDate:new Date(date.year, date.month, date.day)
    // })
   this.frmdate = new Date(date.year, date.month, date.day);
}
public updateSelectedDate(date: NgbDate) {
  // Use this method to set any other date format you want 
  // this.FlightForm.patchValue({
  //   EndDate:new Date(date.year, date.month, date.day)
  // })
 this.todate = new Date(date.year, date.month, date.day);
}
  addflight()
  {
    console.log('hi')
    console.log(this.FlightForm)
    this.FlightForm.patchValue({
      StartDate:this.frmdate,
      EndDate:this.todate
    })
    const val = this.FlightForm.value;
    if( val.AirlineId,
      val.FromPlace,
     val.ToPlace,
      val.StartDate ,
      val.EndDate,
      val.ScheduleDays,
      val.Instrument,
      val.BusinessSeat,
      val.NonBusinessSeat,
      val.Couponcode,
      val.Couponcodeamt,
      val.BusinessSeatCost,
      val.NonBusinessSeatCost)
    {
this.airlineservice.addflight(val.AirlineId,
  val.FromPlace,
  val.ToPlace,
  val.StartDate ,
  val.EndDate,
  val.ScheduleDays,
  val.Instrument,
  val.BusinessSeat,
  val.NonBusinessSeat,
  val.Couponcode,
      val.Couponcodeamt,
      val.BusinessSeatCost,
      val.NonBusinessSeatCost)
  .subscribe(data => {
    console.log(data)
    this.mdservice.dismissAll()
    })
  }
}

updateflight()
{
  console.log('hi')
  console.log(this.flightnumber)
  
  // this.FlightForm.patchValue({
  //   StartDate:this.frmdate,
  //   EndDate:this.todate
  // })
  const val = this.FlightForm.value;
  this.updateSelectedDate1(val.StartDate)
  this.updateSelectedDate(val.EndDate)
  if( val.AirlineId,
    val.FromPlace,
   val.ToPlace,
    val.StartDate ,
    val.EndDate,
    val.ScheduleDays,
    val.Instrument,
    val.BusinessSeat,
    val.NonBusinessSeat,
    val.Couponcode,
      val.Couponcodeamt,
      val.BusinessSeatCost,
      val.NonBusinessSeatCost)
  {
this.airlineservice.updateflight(val.AirlineId,
  val.FromPlace,
  val.ToPlace,
  val.StartDate ,
  val.EndDate,
  val.ScheduleDays,
  val.Instrument,
  val.BusinessSeat,
  val.NonBusinessSeat,
  val.TicketCost,
  val.Couponcode,
      val.Couponcodeamt,
      val.BusinessSeatCost,
      val.NonBusinessSeatCost)
.subscribe(data => {
  console.log(data)
  this.airlineservice.getflight(val.AirlineId).subscribe(data => {
    console.log(data)
    
    this.flight=data;
   
  }) 
  this.flightnumber=''
  this.mdservice.dismissAll()
  })
}
}
  // searchItems() {
  //   console.log("hi")
  //   const prev = this.data1;
  //   if (!this.searchText) {
  //    // this.mdbTable.setDataSource(this.previous);
  //     this.data1 = this.data1;
  //   }
  //   if (this.searchText) {
  //     this.data1 = this.data1.searchLocalDataBy(this.searchText);
  //     this.data1.setDataSource(prev);
  //   }
  // }
}
