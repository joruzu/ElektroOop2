import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakRapportComponent } from './vak-rapport.component';

describe('VakRapportComponent', () => {
  let component: VakRapportComponent;
  let fixture: ComponentFixture<VakRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
