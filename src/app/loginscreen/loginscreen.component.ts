import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from '../Services/alert.service';
import { AuthenticationService } from '../Services/authentication.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {
  expToken: any;
  tokenPayload: any;
  expirationDate: any;
  registerForm:FormGroup;
  vall:any
  islogin:any

  constructor(private fb:FormBuilder, private jwtHelper: JwtHelperService,
               private authService: AuthenticationService, 
               private router: Router) {

      this.registerForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', Validators.required]
       
      });
  }
  ngOnInit(): void {
    //localStorage.clear();
    
  }
 

  login() {
    console.log("hi")
      const val = this.registerForm.value;
//localStorage.clear()
      if (val.username && val.password) {
        console.log(val.username)
          this.authService.login(val.username, val.password)
          .subscribe(data => {
                      console.log(data);
                      this.expToken=data;
                      this.GetTokenDecoded();
    this.getTokenExpirationDate();
    var role=this.tokenPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    // var role=JSON.stringify({ 
    //   ts: this.tokenPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]});
    var name = this.tokenPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      localStorage.setItem('role',role)
       localStorage.setItem('name',name)
       localStorage.setItem('token',this.expToken)
       this.islogin=true
    localStorage.setItem('login',this.islogin)
    //this.vall=localStorage.getItem('currentUser')
    console.log(localStorage.getItem('name'))
    this.router.navigate(['/Main']);
                  }
              );
      }
  }
  GetTokenDecoded() {
    console.log(this.jwtHelper.decodeToken(this.expToken))
    this.tokenPayload = this.jwtHelper.decodeToken(this.expToken);
    console.log(this.tokenPayload);
  }
  getTokenExpirationDate() {
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.expToken);
  }
  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.expToken);
  }
}
 
