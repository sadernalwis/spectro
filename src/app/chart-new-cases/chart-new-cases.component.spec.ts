import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNewCasesComponent } from './chart-new-cases.component';

describe('ChartNewCasesComponent', () => {
  let component: ChartNewCasesComponent;
  let fixture: ComponentFixture<ChartNewCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNewCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
