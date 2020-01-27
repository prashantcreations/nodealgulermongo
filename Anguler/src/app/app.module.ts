import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MyfirstComponentComponent } from './myfirst-component/myfirst-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PrefixfornamePipe } from './prefixforname.pipe';
import { RoutingComponent } from './routing/routing.component';


@NgModule({
  declarations: [
    MyfirstComponentComponent,
    LogincomponentComponent,
    HomeComponent,
    PagenotfoundComponent,
    RoutingComponent,
    EmployeeComponent,
    PrefixfornamePipe,
    AddemployeeComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
