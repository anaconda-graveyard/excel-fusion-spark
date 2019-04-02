import { Component, OnInit, Input, EventEmitter, ViewContainerRef, ChangeDetectorRef, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogFunctionsService } from '../services/catalog-functions.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-notebook',
  templateUrl: './function-form.component.html',
  styleUrls: ['./function-form.component.scss']
})
export class FunctionFormComponent implements OnInit {
  selectedCatalogFunctionName: string;
  selectedCatalogFunctionObject: object;
  allCatalogFunctions: Array<any>;
  projectForm: FormGroup;
  excelSync: boolean = true;
  autoRun: boolean = false;
  functionFormGroup: FormGroup;
  hasInputs: boolean = false;
  hasErrors: boolean = false;
  errorMessage: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CatalogFunctionsService,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef
  ) {
    this.selectedCatalogFunctionName = this.route.snapshot.params.name;
    this.functionFormGroup = new FormGroup({});
    this.hasErrors = false;
  }

  ngOnInit() {
    // this.service.getFunctionDetails({}, this.selectedCatalogFunctionName).subscribe((catalogFunctions) => {
    this.service.getFunctions({}).subscribe((catalogFunctions) => {
      let tmp = [];
      // TODO: Fabio & Rudy are getting different data so data extraction is a bit different for each of us.
      // Fabio: L41 - Object.values(catalogFunctions).forEach((v) => {
      // Rudy:  L41 - Object.values(catalogFunctions)[0].forEach((v) => {
      Object.values(catalogFunctions)[0].forEach((v) => {
        if (v.name === this.selectedCatalogFunctionName) {
          this.selectedCatalogFunctionObject = v;
        }
        tmp.push(v.name);
      });

      this.allCatalogFunctions = tmp;
      this.createForm();
    });
  }

  createForm() {
    console.log('create form for function... ')
    console.log('this.selectedCatalogFunctionObject: ', this.selectedCatalogFunctionName);
    console.log('this.selectedCatalogFunctionObject[meta]: ', this.selectedCatalogFunctionName['meta']);
    if (this.selectedCatalogFunctionObject && this.selectedCatalogFunctionObject['meta'] && this.selectedCatalogFunctionObject['meta'].inputs) {
      this.hasInputs = true;
      this.selectedCatalogFunctionObject['meta'].inputs.forEach((field) => {
        this.functionFormGroup.addControl(field.name, new FormControl());
      });
    }
  }

  excelSyncToggle(): void {
    this.excelSync = !this.excelSync;
  }

  autoRunToggle(): void {
    this.autoRun = !this.autoRun;
  }

  onSubmit() {
    this.service.postFunctionForm(
      this.selectedCatalogFunctionObject['url'],
      this.functionFormGroup.value,
      {}
    ).subscribe((data) => {
      console.log('success', data);
      var outputDivHtml = '<div>';
      var outputDiv = document.getElementsByClassName('function-form-response')[0];
      if (data['display_data'] != null){
        // @Rudy - This is Fabio's crappy quick ugly hack... look elsewhere ;)
        outputDivHtml += '<div><img src="data:image/png;base64,'+data['display_data']['image/png']+'"</div>';
      }

      if (data['result'] != null){
        // @Rudy - more ugly hacks... or at least I hope Angular has better suppoort for this lol
        outputDivHtml += '<div>'+data['result']+'"</div>';
      }
      outputDivHtml += '</div>';
      outputDiv.innerHTML = outputDivHtml;
    }, (error) => {
      this.hasErrors = true;
      this.errorMessage = error.message;
      // this.ref.detectChanges();
    });
  }
}