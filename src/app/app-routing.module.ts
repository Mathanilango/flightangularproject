import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegisterComponent } from './register/register.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { CanActivate } from '@angular/router'; 
import { Router } from '@angular/router';

// export class DashBoardGuard implements CanActivate {
//   constructor(private rout:Router)
//   {

//   }
 
//   /* canActivate() {
//     if (localStorage.getItem('name')!='')  {
//       return true; 
//     } else {
//        this.rout.navigate([''])
//       return true ;
//     }
//   }
  
// }
const routes: Routes = [
  {
    path:'User',
    component:LoginComponentComponent
  },{
  path:'Register',
    component:RegisterComponent
  },{
    path:'Main',
      component:MainComponentComponent,
    }
    ,{
      path:'Login',
        component:LoginscreenComponent
      },{
        path:'Booking',
          component:TicketbookingComponent
        }
        ,{
          path:'',
            component:LoginscreenComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
