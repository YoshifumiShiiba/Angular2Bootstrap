import { TestBed, inject } from '@angular/core/testing';
import { AppApiService } from './app-api.service';

describe('AppApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppApiService]
    });
  });

  it('should ...', inject([AppApiService], (service: AppApiService) => {
    expect(service).toBeTruthy();
  }));
});
