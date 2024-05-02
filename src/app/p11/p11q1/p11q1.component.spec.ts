import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P11q1Component } from './p11q1.component';

describe('P11q1Component', () => {
  let component: P11q1Component;
  let fixture: ComponentFixture<P11q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P11q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P11q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
