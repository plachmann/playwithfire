import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamelinkplaygroundComponent } from './flamelinkplayground.component';

describe('FlamelinkplaygroundComponent', () => {
  let component: FlamelinkplaygroundComponent;
  let fixture: ComponentFixture<FlamelinkplaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamelinkplaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamelinkplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
