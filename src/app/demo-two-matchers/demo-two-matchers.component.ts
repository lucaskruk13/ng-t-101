import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-two-matchers',
  templateUrl: './demo-two-matchers.component.html',
  styleUrls: ['./demo-two-matchers.component.css'],
})
export class DemoTwoMatchersComponent {
  public numberOne = 1;
  public stringOne = '1';

  public undefinedValue;
  public nullValue = null;
}
