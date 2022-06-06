import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavMessagesComponent } from './top-nav-messages.component';

describe('TopNavMessagesComponent', () => {
  let component: TopNavMessagesComponent;
  let fixture: ComponentFixture<TopNavMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
