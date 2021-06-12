import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasoulExampleComponent } from './carasoul-example.component';

describe('CarasoulExampleComponent', () => {
  let component: CarasoulExampleComponent;
  let fixture: ComponentFixture<CarasoulExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarasoulExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarasoulExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
