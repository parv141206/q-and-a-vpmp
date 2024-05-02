/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P11q2Component } from './p11q2.component';

describe('P11q2Component', () => {
  let component: P11q2Component;
  let fixture: ComponentFixture<P11q2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P11q2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P11q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
