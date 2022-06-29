import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../Services/register-service.service';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Register } from '../Models/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg : Register;
  showMsg:boolean;
  showdng:boolean;
  showwng:boolean
  lts:any
  click:boolean
 
  constructor(public fb: FormBuilder,private registerservice :RegisterServiceService, private router:Router ) { 
    this.reg= new Register()
   
    this.reg.Gender='Male'
    this.reg.Role='Admin'
    this.showMsg=false
    this.showdng=false;
    this.showwng=false
    this.click=true;
    //this.reg= new fb();
    // this.reg =  this.fb.group({
    //   Firstname: '',
    //   Lastname: '',
    //   Email: '',
    //   Gender: '',
    //   Username: '',
    //   Password: '',
    //   Role: ''
    // });
  }
 

  ngOnInit(): void {
    
  
  }
  onKey(event: KeyboardEvent) { 
    // if value is not empty the set click to false otherwise true
    console.log(localStorage.getItem('role'))
    console.log("hi")
    console.log(this.reg.Firstname)
    this.click = this.reg.Firstname === ''? true:false;
    // console.log(this.reg.Firstname)
     this.click = this.reg.Lastname ===''? true:false; 
    this.click = this.reg.Email ===''? true:false;
    //this.click = this.reg.Gender ===''? true:false;
    this.click = this.reg.Password === ''? true:false;
     this.click = this.reg.Username ===''? true:false;
    // this.click = this.reg.Role ===''? true:false;
    //this.click = (event.target as HTMLInputElement).value === '' ? true:false;
  }
  onSubmit()
  {
    console.log("h")
    this.router.navigate(['/Main']);
  }
  newregister() {
    this.showMsg=false
    this.showdng=false;
    this.showwng=false
    this.registerservice.newregister(this.reg)
      .subscribe(data => {
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(data.json(), null, 4));
        console.log(data)
        this.lts=data;
         if(data=='Save Failed')
         {
       this.showdng=true;  
         }
         if(data=='Registered Sucessfully!!'){
           this.showMsg=true;
         }
         if(data=='Registered Already'){
          this.showwng=false;
        }
      this.reg= new Register();
      this.reg.Gender='Male'
      this.reg.Role='Admin'
      this.click=true;
      this.router.navigate(['/Login']);
      })  
        
  }

}
