import { TestBed } from '@angular/core/testing';

import { RotateImageService } from './rotate-image.service';

describe('RotateImageService', () => {
  let service: RotateImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotateImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
