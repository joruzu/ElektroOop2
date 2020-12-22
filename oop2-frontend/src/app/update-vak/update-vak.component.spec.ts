import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVakComponent } from './update-vak.component';

describe('UpdateVakComponent', () => {
  let component: UpdateVakComponent;
  let fixture: ComponentFixture<UpdateVakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
