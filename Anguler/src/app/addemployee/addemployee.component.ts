import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddempserviceService } from '../addempservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  formdata = new FormGroup({
    id: new FormControl(), name: new FormControl()
    , phone: new FormControl(), email: new FormControl()
    , loginName: new FormControl(), password: new FormControl()
    , role: new FormControl(), status: new FormControl(), gender: new FormControl()
  });

  constructor(private addEmpService: AddempserviceService) {
    console.log(this.formdata);
  }

  onSubmit(data) {
    console.log(data);
    this.addEmpService.postEmpData(data);
  }

  ngOnInit() {
  }


}
