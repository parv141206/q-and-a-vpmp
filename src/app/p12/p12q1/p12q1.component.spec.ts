import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P12q1Component } from './p12q1.component';

describe('P12q1Component', () => {
  let component: P12q1Component;
  let fixture: ComponentFixture<P12q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P12q1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P12q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
