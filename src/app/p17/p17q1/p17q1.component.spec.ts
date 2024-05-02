import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P17q1Component } from './p17q1.component';

describe('P17q1Component', () => {
  let component: P17q1Component;
  let fixture: ComponentFixture<P17q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P17q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P17q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
