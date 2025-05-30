import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDirectiveComponent } from './switch-directive.component';

describe('SwitchDirectiveComponent', () => {
  let component: SwitchDirectiveComponent;
  let fixture: ComponentFixture<SwitchDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
