import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursolComponent } from './cursol.component';

describe('CursolComponent', () => {
  let component: CursolComponent;
  let fixture: ComponentFixture<CursolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
