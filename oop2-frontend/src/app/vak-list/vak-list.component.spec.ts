import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakListComponent } from './vak-list.component';

describe('VakListComponent', () => {
  let component: VakListComponent;
  let fixture: ComponentFixture<VakListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
