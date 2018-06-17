import { TestBed, inject } from '@angular/core/testing';

import { VersoesAtivasService } from './versoes-ativas.service';

describe('VersoesAtivasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersoesAtivasService]
    });
  });

  it('should be created', inject([VersoesAtivasService], (service: VersoesAtivasService) => {
    expect(service).toBeTruthy();
  }));
});
