import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit() {
    let getUsers: any = localStorage.getItem('taskUsers');
    getUsers = JSON.parse(getUsers);
    // console.log(getUsers, "getUsers");
    if (getUsers) {
      this.userArray = getUsers;
    } else {
      this.userArray = [];
    }
    // console.log(this.userArray, "userArray");
    
  }

  signUp() {
    let checkExist = this.userArray.find((each: any) => each.email == this.email);
    console.log(checkExist);
    if (checkExist) {
      this.message = true
    } else {
      let obj = { full_name: this.full_name, phone_no: this.phone_no, email: this.email, address: this.address, password: this.password };
      this.userArray.push(obj);
      localStorage.setItem("taskUsers", JSON.stringify(this.userArray));
      this.route.navigate(['/signin']);
    }
  }

}
