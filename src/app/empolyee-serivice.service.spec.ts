import { TestBed } from '@angular/core/testing';

import { EmpolyeeSeriviceService } from './empolyee-serivice.service';

describe('EmpolyeeSeriviceService', () => {
  let service: EmpolyeeSeriviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpolyeeSeriviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
