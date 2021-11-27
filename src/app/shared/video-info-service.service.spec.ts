import { TestBed } from '@angular/core/testing';

import { VideoInfoServiceService } from './video-info-service.service';

describe('VideoInfoServiceService', () => {
  let service: VideoInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
