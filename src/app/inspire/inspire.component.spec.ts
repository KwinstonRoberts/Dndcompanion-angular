/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InspireComponent } from './inspire.component';

describe('InspireComponent', () => {
  let component: InspireComponent;
  let fixture: ComponentFixture<InspireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
