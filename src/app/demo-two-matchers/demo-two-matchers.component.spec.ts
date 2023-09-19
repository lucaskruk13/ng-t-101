import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTwoMatchersComponent } from './demo-two-matchers.component';

describe('DemoTwoReferencesComponent', () => {
  let component: DemoTwoMatchersComponent;
  let fixture: ComponentFixture<DemoTwoMatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoTwoMatchersComponent],
    });
    fixture = TestBed.createComponent(DemoTwoMatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should Strictly Equal 1', () => {
    expect<any>(component.numberOne).toBe(component.stringOne);

    // expect<any>(String(component.numberOne)).toBe(component.stringOne);
  });

  it('loosly nullish', () => {
    expect(component.nullValue).toBeFalsy();
  });

  it('loosly undefined-ish', () => {
    expect(component.undefinedValue).toBeFalsy();
  });
});
