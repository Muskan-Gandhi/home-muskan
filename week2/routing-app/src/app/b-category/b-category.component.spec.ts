import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCategoryComponent } from './b-category.component';

describe('BCategoryComponent', () => {
  let component: BCategoryComponent;
  let fixture: ComponentFixture<BCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
