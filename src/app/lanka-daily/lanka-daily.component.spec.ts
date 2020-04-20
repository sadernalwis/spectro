import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LankaDailyComponent } from './lanka-daily.component';

describe('LankaDailyComponent', () => {
  let component: LankaDailyComponent;
  let fixture: ComponentFixture<LankaDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LankaDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LankaDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
