import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PppMainMenuComponent } from './ppp-main-menu.component';

describe('PppMainMenuComponent', () => {
  let component: PppMainMenuComponent;
  let fixture: ComponentFixture<PppMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PppMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PppMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
