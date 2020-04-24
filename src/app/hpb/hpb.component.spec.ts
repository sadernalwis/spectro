import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpbComponent } from './hpb.component';

describe('HpbComponent', () => {
  let component: HpbComponent;
  let fixture: ComponentFixture<HpbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
