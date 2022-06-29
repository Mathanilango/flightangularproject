import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsearchComponent } from './ticketsearch.component';

describe('TicketsearchComponent', () => {
  let component: TicketsearchComponent;
  let fixture: ComponentFixture<TicketsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
