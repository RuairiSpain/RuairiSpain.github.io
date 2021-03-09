import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcileLandingComponent } from './reconcile-landing.component';

describe('ReconcileLandingComponent', () => {
  let component: ReconcileLandingComponent;
  let fixture: ComponentFixture<ReconcileLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconcileLandingComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconcileLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
