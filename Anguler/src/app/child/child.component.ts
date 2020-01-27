import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {



  constructor() { }

  @Input()
  Male = 0;
  @Input()
  Female = 0;
  @Input()
  All = 0;

  onRadioButtonSelectionChange = 'All';


  @Output()
  countRadioButton: EventEmitter<string> = new EventEmitter<string>();
  onRadioSelectCount() {
    this.countRadioButton.emit(this.onRadioButtonSelectionChange);
  }




  ngOnInit() {
  }



}
