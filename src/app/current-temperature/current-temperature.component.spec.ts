import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTemperatureComponent } from './current-temperature.component';

describe('CurrentTemperatureComponent', () => {
  let component: CurrentTemperatureComponent;
  let fixture: ComponentFixture<CurrentTemperatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTemperatureComponent]
    });
    fixture = TestBed.createComponent(CurrentTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
