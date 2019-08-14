import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRevenueDialogComponent } from './add-revenue-dialog.component';

describe('AddRevenueDialogComponent', () => {
  let component: AddRevenueDialogComponent;
  let fixture: ComponentFixture<AddRevenueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRevenueDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRevenueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
