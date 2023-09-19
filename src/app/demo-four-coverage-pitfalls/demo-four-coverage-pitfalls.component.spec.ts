import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFourCoveragePitfallsComponent } from './demo-four-coverage-pitfalls.component';

fdescribe('DemoFourCoveragePitfallsComponent', () => {
  let component: DemoFourCoveragePitfallsComponent;
  let fixture: ComponentFixture<DemoFourCoveragePitfallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFourCoveragePitfallsComponent],
    });
    fixture = TestBed.createComponent(DemoFourCoveragePitfallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should cover complete fizzbuzz', () => {
    expect(component.fizzBuzz).toBe('bumble');
  });
});
