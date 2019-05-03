import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionDetailsFormComponent } from './function-details-form.component';

describe('FunctionDetailsFormComponent', () => {
  let component: FunctionDetailsFormComponent;
  let fixture: ComponentFixture<FunctionDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
