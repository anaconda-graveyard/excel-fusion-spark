import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionDetailsOutputComponent } from './function-details-output.component';

describe('FunctionDetailsOutputComponent', () => {
  let component: FunctionDetailsOutputComponent;
  let fixture: ComponentFixture<FunctionDetailsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionDetailsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionDetailsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
