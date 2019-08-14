import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseDialogueComponent } from './add-expense-dialogue.component';

describe('AddExpenseDialogueComponent', () => {
  let component: AddExpenseDialogueComponent;
  let fixture: ComponentFixture<AddExpenseDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
