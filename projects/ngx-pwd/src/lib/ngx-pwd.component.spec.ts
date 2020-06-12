import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPwdComponent } from './ngx-pwd.component';

describe('NgxPwdComponent', () => {
  let component: NgxPwdComponent;
  let fixture: ComponentFixture<NgxPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
