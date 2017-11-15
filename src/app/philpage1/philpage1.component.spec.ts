import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Philpage1Component } from './philpage1.component';

describe('Philpage1Component', () => {
  let component: Philpage1Component;
  let fixture: ComponentFixture<Philpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Philpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Philpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
