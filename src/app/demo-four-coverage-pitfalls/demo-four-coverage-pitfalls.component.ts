import { Component } from '@angular/core';

export type FIZZBUZZ = {
  fizz: {
    buzz: {
      bee: string;
    };
  };
};

@Component({
  selector: 'app-demo-four-coverage-pitfalls',
  templateUrl: './demo-four-coverage-pitfalls.component.html',
  styleUrls: ['./demo-four-coverage-pitfalls.component.css'],
})
export class DemoFourCoveragePitfallsComponent {
  private _fizzBuzz = { fizz: {} } as FIZZBUZZ;

  get fizzBuzz(): string {
    return this._fizzBuzz?.fizz?.buzz?.bee ?? 'default value';
  }
}
