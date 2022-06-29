import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }
  onSubmit(Firstname:any,Lastname:any)
  {
    alert("Hi "+Firstname +Lastname)
  }
  ngOnInit(): void {
  }

}
