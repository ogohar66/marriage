import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthUserComponent } from './health-user.component';

describe('HealthUserComponent', () => {
  let component: HealthUserComponent;
  let fixture: ComponentFixture<HealthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
