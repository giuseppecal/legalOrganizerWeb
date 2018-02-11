import { TestBed, inject } from '@angular/core/testing';

import { LastPracticesService } from './last-practices.service';

describe('LastPracticesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastPracticesService]
    });
  });

  it('should be created', inject([LastPracticesService], (service: LastPracticesService) => {
    expect(service).toBeTruthy();
  }));
});
