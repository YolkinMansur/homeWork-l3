import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBigAirComponent } from './some-big-air.component';

describe('SomeBigAirComponent', () => {
  let component: SomeBigAirComponent;
  let fixture: ComponentFixture<SomeBigAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeBigAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeBigAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
