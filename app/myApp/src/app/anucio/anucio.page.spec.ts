import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnucioPage } from './anucio.page';

describe('AnucioPage', () => {
  let component: AnucioPage;
  let fixture: ComponentFixture<AnucioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnucioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnucioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
