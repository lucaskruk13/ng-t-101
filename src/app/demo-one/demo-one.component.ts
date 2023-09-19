import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css'],
})
export class DemoOneComponent implements OnInit {
  public setInInit: string;

  ngOnInit(): void {
    this.setInInit = 'value has been set';
  }
}
