/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProficiencyComponent } from './proficiency.component';

describe('ProficiencyComponent', () => {
  let component: ProficiencyComponent;
  let fixture: ComponentFixture<ProficiencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
