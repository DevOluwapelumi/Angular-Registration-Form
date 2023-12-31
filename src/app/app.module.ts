import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { WildcashComponent } from './wildcash/wildcash.component';
import { BudgetComponent } from './budget/budget.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupbackendComponent } from './signupbackend/signupbackend.component';
import { SigninbackendComponent } from './signinbackend/signinbackend.component';
import { BackendsigninComponent } from './backendsignin/backendsignin.component';
import { BackenddashboardComponent } from './backenddashboard/backenddashboard.component';
import { BackendeditComponent } from './backendedit/backendedit.component';
import { BackenddeleteComponent } from './backenddelete/backenddelete.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    WildcashComponent,
    BudgetComponent,
    AddItemComponent,
    EditItemComponent,
    BudgetListComponent,
    SignupbackendComponent,
    SigninbackendComponent,
    BackendsigninComponent,
    BackenddashboardComponent,
    BackendeditComponent,
    BackenddeleteComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
