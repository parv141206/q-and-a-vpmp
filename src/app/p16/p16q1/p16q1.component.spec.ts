import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P16q1Component } from './p16q1.component';

describe('P16q1Component', () => {
  let component: P16q1Component;
  let fixture: ComponentFixture<P16q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P16q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P16q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
