import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function-details-output',
  templateUrl: './function-details-output.component.html',
  styleUrls: ['./function-details-output.component.css']
})
export class FunctionDetailsOutputComponent implements OnInit {
  @Input() output: any; // output can vary

  constructor() { }

  ngOnInit() {
  }

}
