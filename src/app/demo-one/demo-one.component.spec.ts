import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoOneComponent } from './demo-one.component';

/**
 * NG On Init within Test Cases
 */
describe('DemoOneComponent', () => {
  let component: DemoOneComponent;
  let fixture: ComponentFixture<DemoOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoOneComponent],
    });
    fixture = TestBed.createComponent(DemoOneComponent);
    component = fixture.componentInstance;

    // Enable fixture detect changes to run ng on init before each
    fixture.detectChanges();
  });

  it('Should log on init 1', () => {
    // component.ngOnInit();
    expect(component.setInInit).toBe('value has been set');
  });

  it('Should log on init 2', () => {
    // component.ngOnInit();
    expect(component.setInInit).toBe('value has been set');
  });

  it('Should log on init 3', () => {
    // component.ngOnInit();
    expect(component.setInInit).toBe('value has been set');
  });
});
