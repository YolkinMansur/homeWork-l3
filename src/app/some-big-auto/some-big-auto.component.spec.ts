import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBigAutoComponent } from './some-big-auto.component';

describe('SomeBigAutoComponent', () => {
  let component: SomeBigAutoComponent;
  let fixture: ComponentFixture<SomeBigAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeBigAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeBigAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
