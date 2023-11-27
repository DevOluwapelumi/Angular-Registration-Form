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
    email: ['', [Validators.required, Validators.email]],
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
        // if (data && data.success === true) {
        //   // Redirect to signinbackend upon successful registration
        //   this.router.navigate(['/signinbackend']);
        // }
      },
      (error) => {
        console.log(error);
      }
    );

    this.forms.reset(); 
    console.log("Welcome back Home");
  }
}
