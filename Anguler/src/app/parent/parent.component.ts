import { Component, OnInit } from '@angular/core';
import { IEmp } from '../IEmp';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  iemp: IEmp[];

  constructor() {
    this.iemp = [
      {
        id: 'emp101', name: 'Tom', phone: '9425759567', email: 12365,
        gender: 'Male', password: 'prjmfr',
        status: 'A', role: 'admin'
      },
      {
        id: 'emp102', name: 'Tom', phone: '9425759567', email: 12365,
        gender: 'Female', password: 'prjmfr',
        status: 'A', role: 'admin'
      },
      {
        id: 'emp103', name: 'Tom', phone: '9425759567', email: 12365,
        gender: 'Male', password: 'prjmfr',
        status: 'A', role: 'admin'
      }


    ];
  }


  selectedEmployeeCountRadioButton = 'All';

  getTotalEmployeeCount(): number {
    return this.iemp.length;
  }

  getMaleEmployeeCount(): number {
    return this.iemp.filter(e => e.gender === 'Male').length;
  }
  getFemaleEmployeeCount(): number {
    return this.iemp.filter(e => e.gender === 'Female').length;
  }

  onEmployeeCountRadioButtonChange(selectRadioButtonValue: string): void {
    alert(selectRadioButtonValue);
    this.selectedEmployeeCountRadioButton = selectRadioButtonValue;
  }
  ngOnInit() {
  }
}
