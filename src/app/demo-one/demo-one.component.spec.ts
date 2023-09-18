import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoOneComponent } from './demo-one.component';
import { Type } from '@angular/core';
import { createProviderArray } from '../utils/create-provider-array.util';

describe('DemoOneComponent', () => {
  let component: DemoOneComponent;
  let fixture: ComponentFixture<DemoOneComponent>;

  const runBeforeEach = (...overrides: Type<any>[]) => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [DemoOneComponent],
        providers: createProviderArray([]),
      });
      fixture = TestBed.createComponent(DemoOneComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  };

  describe('Simple App', () => {
    runBeforeEach();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
