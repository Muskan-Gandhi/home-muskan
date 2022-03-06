import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModuleComponent } from './reactive-forms-module.component';

describe('ReactiveFormsModuleComponent', () => {
  let component: ReactiveFormsModuleComponent;
  let fixture: ComponentFixture<ReactiveFormsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
