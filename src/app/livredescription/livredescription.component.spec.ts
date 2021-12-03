import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivredescriptionComponent } from './livredescription.component';

describe('LivredescriptionComponent', () => {
  let component: LivredescriptionComponent;
  let fixture: ComponentFixture<LivredescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivredescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivredescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
