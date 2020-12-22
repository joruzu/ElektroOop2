import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRapportVakComponent } from './create-rapport-vak.component';

describe('CreateRapportVakComponent', () => {
  let component: CreateRapportVakComponent;
  let fixture: ComponentFixture<CreateRapportVakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRapportVakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRapportVakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
