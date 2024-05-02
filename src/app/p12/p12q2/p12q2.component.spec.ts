import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P12q2Component } from './p12q2.component';

describe('P12q2Component', () => {
  let component: P12q2Component;
  let fixture: ComponentFixture<P12q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P12q2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P12q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
