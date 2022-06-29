import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../Services/register-service.service';
import { Register } from '../Models/Register';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  register : any;
  constructor(private registerservice :RegisterServiceService) { }
  
  ngOnInit() {
    
   
}
ADDNEWUSER() {
  this.registerservice.addPerson(this.register)
        .subscribe(data => {
         // alert(data)
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        })      
    }
}
