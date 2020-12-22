import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVakComponent } from './create-vak.component';

describe('CreateVakComponent', () => {
  let component: CreateVakComponent;
  let fixture: ComponentFixture<CreateVakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
