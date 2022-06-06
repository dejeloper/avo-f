import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavMessagesItemComponent } from './top-nav-messages-item.component';

describe('TopNavMessagesItemComponent', () => {
  let component: TopNavMessagesItemComponent;
  let fixture: ComponentFixture<TopNavMessagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavMessagesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavMessagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
