import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavDocsComponent } from './top-nav-docs.component';

describe('TopNavDocsComponent', () => {
  let component: TopNavDocsComponent;
  let fixture: ComponentFixture<TopNavDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
