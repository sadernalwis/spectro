import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDailyRecoveryComponent } from './chart-daily-recovery.component';

describe('ChartDailyRecoveryComponent', () => {
  let component: ChartDailyRecoveryComponent;
  let fixture: ComponentFixture<ChartDailyRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDailyRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDailyRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
