import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRapportComponent } from './student-rapport.component';

describe('StudentRapportComponent', () => {
  let component: StudentRapportComponent;
  let fixture: ComponentFixture<StudentRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
