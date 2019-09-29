import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDataPage } from './selected-data.page';

describe('SelectedDataPage', () => {
  let component: SelectedDataPage;
  let fixture: ComponentFixture<SelectedDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
