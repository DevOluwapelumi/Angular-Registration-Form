import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from "../services/backend.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signupbackend',
  templateUrl: './signupbackend.component.html',
  styleUrls: ['./signupbackend.component.css']
})
export class SignupbackendComponent {
  constructor(public formbuilder: FormBuilder, public services: BackendService, private router: Router) { }
 
  
  public forms = this.formbuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    phone_number : ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.maxLength(10)]],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    complexion: ['', Validators.required],
    department: ['', Validators.required],
    password: ['', [Validators.required, Validators.maxLength(8)]],
  })

  submitForm() {
    console.log(this.forms.value);

    this.services.sendsignup(this.forms.value).subscribe(
      (data) => {
        console.log(data);
        // Handle success, e.g., redirect to another page
      },
      (error) => {
        console.log(error);
        // Handle error
      }
    );

    this.forms.reset(); // Reset the form after submission
    console.log("Welcome back Home");
  }

    

   


  // if (this.backendsignup.valid) {
  //   this.services.sendsignup(this.backendsignup.value).subscribe(data => {
  //     console.log(data); 
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
