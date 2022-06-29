import { Component, OnInit } from '@angular/core';

import { FormBuilder,AbstractControl, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
//import { ConfirmPasswordValidator } from '../_helpers/mismatch.validator'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  
  //formdata:any;
  //firstname:any;
  //lastname:any;
  registerForm: any;
    submitted = false;
  onsubmit(Values:any)
  {
    console.log("Value", Values);
  }
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    // this.formdata= new FormGroup({
    //   firstname :new FormControl('mathan'),
    //   lastname: new FormControl('Kumar')

    // })

    this.registerForm = this.formBuilder.group({
      title: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      acceptTerms: [false]
  },
     
  );
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
  

}
