import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P17q1page2Component } from './p17q1page2.component';

describe('P17q1page2Component', () => {
  let component: P17q1page2Component;
  let fixture: ComponentFixture<P17q1page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P17q1page2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P17q1page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
