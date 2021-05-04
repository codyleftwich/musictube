import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoControlsComponent } from './youtube-video-controls.component';

describe('YoutubeVideoControlsComponent', () => {
  let component: YoutubeVideoControlsComponent;
  let fixture: ComponentFixture<YoutubeVideoControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeVideoControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeVideoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
