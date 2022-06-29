import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAirlineComponent } from './block-airline.component';

describe('BlockAirlineComponent', () => {
  let component: BlockAirlineComponent;
  let fixture: ComponentFixture<BlockAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
