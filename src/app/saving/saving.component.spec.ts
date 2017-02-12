/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SavingComponent } from './saving.component';

describe('SavingComponent', () => {
  let component: SavingComponent;
  let fixture: ComponentFixture<SavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
