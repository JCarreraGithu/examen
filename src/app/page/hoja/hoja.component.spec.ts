import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaComponent } from './hoja.component';

describe('HojaComponent', () => {
  let component: HojaComponent;
  let fixture: ComponentFixture<HojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
