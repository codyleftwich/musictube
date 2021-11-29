import { TestBed } from '@angular/core/testing';

import { VideoInfoService } from './video-info.service';

describe('VideoInfoServiceService', () => {
  let service: VideoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
