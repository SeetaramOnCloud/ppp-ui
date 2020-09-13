import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PppLayoutComponent } from './ppp-layout.component';

describe('PppLayoutComponent', () => {
  let component: PppLayoutComponent;
  let fixture: ComponentFixture<PppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
