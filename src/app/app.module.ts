import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Size1Component } from './size1/size1.component';
import { LoginComponent } from './login/login.component';
//import { form1 } from './form1/form1.component';
import { FormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponentComponent } from './main-component/main-component.component';
import { RegisterComponent } from './register/register.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { BlockAirlineComponent } from './block-airline/block-airline.component';
import { AirlineFilterPipe } from './block-airline/Airline-Filter.pipe';
import { TicketsearchComponent } from './ticketsearch/ticketsearch.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from 
    '@angular/material/button';
import { MatButtonToggleModule } from 
    '@angular/material/button-toggle';
import { MatDatepickerModule } from 
    '@angular/material/datepicker';
import { MatInputModule } from 
    '@angular/material/input';
import { MatFormFieldModule } from 
    '@angular/material/form-field';
import { MatNativeDateModule } from 
    '@angular/material/core';
import { AirlineComponent } from './airline/airline.component';
import { PnrsearchComponent } from './pnrsearch/pnrsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Size1Component,
    LoginComponent,
   // Form1Component,
    ReactiveformComponent,
    TemplateDrivenComponent,
    LoginComponentComponent,
    MainComponentComponent,
    RegisterComponent,
    AddAirlineComponent,
    BlockAirlineComponent,
    AirlineFilterPipe,
    TicketsearchComponent,
    LoginscreenComponent,
    TicketbookingComponent,
    AirlineComponent,
    PnrsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService,DatePipe],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
