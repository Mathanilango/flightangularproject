import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flightbooking';
  fontsize1 = 20;
  Usrname:any
  constructor(private router :Router){
    //this.router.navigate(['/Login'])
    this.Usrname= localStorage.getItem('name')
    console.log(this.Usrname);
  }
  logout()
  {
    if(localStorage.getItem('login')=== 'true')
    {this.Usrname=''
      this.router.navigate(['/Login'])
      localStorage.clear()
    }
  }
}
