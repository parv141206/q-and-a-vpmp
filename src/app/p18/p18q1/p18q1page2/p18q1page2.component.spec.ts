import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P18q1page2Component } from './p18q1page2.component';

describe('P18q1page2Component', () => {
  let component: P18q1page2Component;
  let fixture: ComponentFixture<P18q1page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P18q1page2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P18q1page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
