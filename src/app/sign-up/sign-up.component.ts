import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  
  constructor (public route: Router) { };
  public full_name = "";
  public phone_no = "";
  public email = "";
  public address = "";
  public password = "";
  public userArray: any = [];
  public message = false;
  public user_id: any = 0;

  

  ngOnInit() {
    let user_id: any = localStorage.getItem("taskId");
    if (user_id) {
      this.user_id = JSON.parse(user_id);
    } else {
      this.user_id = 1;
    }
    this.user_id = JSON.parse(user_id);
    let getUsers: any = localStorage.getItem('taskUsers');
    getUsers = JSON.parse(getUsers);
    console.log(getUsers, "getUsers");
    if (getUsers) {
      this.userArray = getUsers;
    } else {
      this.userArray = [];
    }
    console.log(this.userArray, "userArray");
    
  }

  signUp() {
    let checkExist = this.userArray.find((each: any) => each.email == this.email);
    console.log(checkExist);
    if (checkExist) {
      this.message = true
    } else {
      let obj = {user_id: this.userArray, full_name: this.full_name, phone_no: this.phone_no, email: this.email, address: this.address, password: this.password };
      this.userArray.push(obj);
      this.user_id = this.user_id + 1;
      localStorage.setItem("taskUsers", JSON.stringify(this.userArray));
      localStorage.setItem("taskId", JSON.stringify(this.user_id));
      this.route.navigate(['/signin']);
    }
  }

  

}
