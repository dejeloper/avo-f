import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavAlertsComponent } from './top-nav-alerts.component';

describe('TopNavAlertsComponent', () => {
  let component: TopNavAlertsComponent;
  let fixture: ComponentFixture<TopNavAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
