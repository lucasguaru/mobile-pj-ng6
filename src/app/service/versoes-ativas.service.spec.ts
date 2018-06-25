import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { VersoesAtivasService } from './versoes-ativas.service';

describe('VersoesAtivasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersoesAtivasService],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([VersoesAtivasService], (service: VersoesAtivasService) => {
    expect(service).toBeTruthy();
  }));
});
