import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P18q1Component } from './p18q1.component';

describe('P18q1Component', () => {
  let component: P18q1Component;
  let fixture: ComponentFixture<P18q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P18q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P18q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
