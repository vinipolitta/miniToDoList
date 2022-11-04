import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoButtonDeleteComponent } from './to-do-button-delete.component';

describe('ToDoButtonDeleteComponent', () => {
  let component: ToDoButtonDeleteComponent;
  let fixture: ComponentFixture<ToDoButtonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoButtonDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
