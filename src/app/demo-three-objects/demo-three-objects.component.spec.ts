import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoThreeObjectsComponent } from './demo-three-objects.component';

describe('DemoThreeObjectsComponent', () => {
  let component: DemoThreeObjectsComponent;
  let fixture: ComponentFixture<DemoThreeObjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoThreeObjectsComponent],
    });
    fixture = TestBed.createComponent(DemoThreeObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const sno = {
    sno: ['Anupam', 'Williams', 'Sree', 'Lucas', 'Stephen', 'Anouar', 'Haris'],
    PI: 3,
    apps: {
      rmde: ['Angular', 'C#'],
      ezco2: ['Angular', 'Python'],
    },
  };
  const mobils = {
    sno: ['Anupam', 'Williams', 'Sree', 'Lucas', 'Stephen', 'Anouar', 'Haris'],
    PI: 3,
    apps: {
      rmde: ['Angular', 'C#'],
      ezco2: ['Angular', 'Python'],
    },
  };

  it('Should not BE', () => {
    expect(sno).toBe(mobils);
  });

  it('Should Be', () => {
    const snomobils = mobils;
    expect(snomobils).toBe(mobils);

    // WHY????? references.
  });

  it('Should Equal', () => {
    expect(sno).toEqual(mobils);
  });
});
