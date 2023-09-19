import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { DemoTwoMatchersComponent } from './demo-two-matchers/demo-two-matchers.component';
import { DemoThreeObjectsComponent } from './demo-three-objects/demo-three-objects.component';
import { DemoFourCoveragePitfallsComponent } from './demo-four-coverage-pitfalls/demo-four-coverage-pitfalls.component';

@NgModule({
  declarations: [AppComponent, DemoOneComponent, DemoTwoMatchersComponent, DemoThreeObjectsComponent, DemoFourCoveragePitfallsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
