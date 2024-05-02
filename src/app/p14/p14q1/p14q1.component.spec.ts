import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P14q1Component } from './p14q1.component';

describe('P14q1Component', () => {
  let component: P14q1Component;
  let fixture: ComponentFixture<P14q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P14q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P14q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
