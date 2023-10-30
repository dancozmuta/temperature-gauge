import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxIndicatorsComponent } from './min-max-indicators.component';

describe('MinMaxIndicatorsComponent', () => {
  let component: MinMaxIndicatorsComponent;
  let fixture: ComponentFixture<MinMaxIndicatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinMaxIndicatorsComponent]
    });
    fixture = TestBed.createComponent(MinMaxIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
