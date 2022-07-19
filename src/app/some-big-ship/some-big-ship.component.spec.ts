import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBigShipComponent } from './some-big-ship.component';

describe('SomeBigShipComponent', () => {
  let component: SomeBigShipComponent;
  let fixture: ComponentFixture<SomeBigShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeBigShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeBigShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
