import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTrackComponent } from './for-track.component';

describe('ForTrackComponent', () => {
  let component: ForTrackComponent;
  let fixture: ComponentFixture<ForTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
