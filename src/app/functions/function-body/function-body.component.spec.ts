import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionBodyComponent } from './function-body.component';

describe('FunctionBodyComponent', () => {
  let component: FunctionBodyComponent;
  let fixture: ComponentFixture<FunctionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
