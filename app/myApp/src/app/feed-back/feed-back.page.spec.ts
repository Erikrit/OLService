import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackPage } from './feed-back.page';

describe('FeedBackPage', () => {
  let component: FeedBackPage;
  let fixture: ComponentFixture<FeedBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
