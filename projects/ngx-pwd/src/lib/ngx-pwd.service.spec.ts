import { TestBed } from '@angular/core/testing';

import { NgxPwdService } from './ngx-pwd.service';

describe('NgxPwdService', () => {
  let service: NgxPwdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPwdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
