import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTemperatureIndicatorComponent } from './current-temperature-indicator.component';

describe('CurrentTemperatureIndicatorComponent', () => {
  let component: CurrentTemperatureIndicatorComponent;
  let fixture: ComponentFixture<CurrentTemperatureIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTemperatureIndicatorComponent]
    });
    fixture = TestBed.createComponent(CurrentTemperatureIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
