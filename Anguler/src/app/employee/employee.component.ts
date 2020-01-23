import { Component, OnInit } from '@angular/core';
import { EmpdataserviceService } from '../empdataservice.service';
import { IEmp } from '../IEmp';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmpdataserviceService]
})
export class EmployeeComponent implements OnInit {

  employeeList: IEmp[];

  constructor(private empdataserviceService: EmpdataserviceService) {
    console.log('in constructor');
  }
  // lifecycle hook
  ngOnInit(): void {
    console.log('in ');
    // this.employeeList = this.empdataserviceService.getEmpList();
    this.empdataserviceService.getFromSpringBootClient()
      .subscribe(IEmp => this.employeeList = IEmp);
    console.log(this.employeeList);
  }
}
