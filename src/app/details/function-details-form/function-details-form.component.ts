import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogFunction } from './../../models/catalogue-function.model';
import { FormGroup, FormControl } from '@angular/forms';
import { CatalogFunctionsService } from '../../services/catalog-functions.service';
import { getDataFromRange, writeOnSelectedCell } from '../../excel';

@Component({
  selector: 'app-function-details-form',
  templateUrl: './function-details-form.component.html',
  styleUrls: ['./function-details-form.component.scss']
})
export class FunctionDetailsFormComponent implements OnInit {
  @Input() function: CatalogFunction;
  @Output() results: EventEmitter<any> = new EventEmitter<any>();

  functionFormGroup: FormGroup;
  excelSync = true;
  autoRun = false;
  functionHasInputs: boolean;

  constructor(
    private service: CatalogFunctionsService,
  ) {
    this.functionFormGroup = new FormGroup({});
  }

  ngOnInit() {
    if (this.function.meta && this.function.meta.inputs.length > 0) {
      this.functionHasInputs = !this.functionHasInputs;
      this.createForm();
    }
  }

  createForm() {
    this.function.meta.inputs.forEach((field) => {
      this.functionFormGroup.addControl(field.name, new FormControl());
    });
  }

  excelSyncToggle(): void {
    this.excelSync = !this.excelSync;
  }

  autoRunToggle(): void {
    this.autoRun = !this.autoRun;
  }

  resolveParams(params: object): void {
    const baseUrl = this.function.url;
    const formData = this.functionFormGroup.value;
    const fgLength = Object.keys(formData).length;
    const paramsLength = Object.keys(params).length;

    if (fgLength === paramsLength) {
      this.doSubmit(baseUrl, params);
    } else {
      // iterate over keys on formData before `doSubmit()`
      for (let key in formData) {
        if ( params[key] === null && formData[key] !== null ) {
          if (formData[key].startsWith('=')) {
            const _params = params;
            const _baseUrl = baseUrl;
            const _formData = formData;
            const self = this;

            const excelCallback = (resultRange: any): void => {
              let newParams = _params;
              newParams[key] = resultRange.values;
              self.resolveParams(newParams);
            }

            getDataFromRange(formData[key].slice(1), excelCallback);
          } else {
            params[key] = formData[key];
            this.resolveParams(params);
          }
        }
      }

      if (Object.keys((params)).length === 0){
        this.doSubmit(baseUrl, params);
      }
    }
  }

  onSubmit() {
    // console.log('form:', this.functionFormGroup.value);
    this.resolveParams({});
  }

  doSubmit(baseUrl: string, params: object) {
    this.service.postFunctionForm(
      baseUrl, this.functionFormGroup.value, params
    ).subscribe((data) => {
      console.log('maybe emit call to parent to make?')
      console.log('so now we need to emit data to output');
      this.results.emit(data);
    });
  }

}
