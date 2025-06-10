import { TestBed } from '@angular/core/testing';

import { AdminflowserviceService } from './adminflowservice.service';

describe('AdminflowserviceService', () => {
  let service: AdminflowserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminflowserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
