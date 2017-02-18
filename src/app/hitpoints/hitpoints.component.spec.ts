/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HitpointsComponent } from './hitpoints.component';

describe('HitpointsComponent', () => {
  let component: HitpointsComponent;
  let fixture: ComponentFixture<HitpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
