import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCelularesComponent } from './mostrar-celulares.component';

describe('MostrarCelularesComponent', () => {
  let component: MostrarCelularesComponent;
  let fixture: ComponentFixture<MostrarCelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCelularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
