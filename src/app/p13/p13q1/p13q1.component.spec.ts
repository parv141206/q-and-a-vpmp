import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P13q1Component } from './p13q1.component';

describe('P13q1Component', () => {
  let component: P13q1Component;
  let fixture: ComponentFixture<P13q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P13q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P13q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
