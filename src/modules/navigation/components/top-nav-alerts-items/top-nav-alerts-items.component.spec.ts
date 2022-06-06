import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavAlertsItemsComponent } from './top-nav-alerts-items.component';

describe('TopNavAlertsItemsComponent', () => {
  let component: TopNavAlertsItemsComponent;
  let fixture: ComponentFixture<TopNavAlertsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavAlertsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavAlertsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
