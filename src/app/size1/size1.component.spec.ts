import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Size1Component } from './size1.component';

describe('Size1Component', () => {
  let component: Size1Component;
  let fixture: ComponentFixture<Size1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Size1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Size1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
