import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogin:boolean=false
  X:boolean=true
  users:User[]=  [{"UserId":1,"Username":"Mathan"},{"UserId":2,"Username":"Mithran"},{"UserId":3,"Username":"Tharika"}]
  Logname:string="Admin"
  list=[1,2,3,4,5]
  presentDate= new Date()
  pep:any[]=[{"Name":"Mathan" ,"Age":24 },{"Name":"Arun" ,"Age":18 },{"Name":"Gopi" ,"Age":27 }]
  jsonval={a:"AA",b:"b",c:{s:"sss"}}
  constructor() { }

  ngOnInit(): void {
  }

}
