import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAnuciosPage } from './meus-anucios.page';

describe('MeusAnuciosPage', () => {
  let component: MeusAnuciosPage;
  let fixture: ComponentFixture<MeusAnuciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnuciosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAnuciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
