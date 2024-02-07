import { TestBed } from '@angular/core/testing';

import { LogoHelperService } from './logo-helper.service';

describe('LogoHelperService', () => {
  let service: LogoHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
