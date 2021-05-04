import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLoopControlsComponent } from './youtube-loop-controls.component';

describe('YoutubeLoopControlsComponent', () => {
  let component: YoutubeLoopControlsComponent;
  let fixture: ComponentFixture<YoutubeLoopControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLoopControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLoopControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
