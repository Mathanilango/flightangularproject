import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  islogin:boolean=false
  constructor() { }

  ngOnInit(): void {
    this.islogin=false
    if(localStorage.getItem('role')==="Admin")
    {
      this.islogin=true
    }
  }

}
