import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListPage } from './results-list.page';

describe('ResultsListPage', () => {
  let component: ResultsListPage;
  let fixture: ComponentFixture<ResultsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
