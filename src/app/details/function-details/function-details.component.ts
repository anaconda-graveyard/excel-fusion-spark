import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogFunction } from 'src/app/models/catalogue-function.model';
import { mockCatalogueFunctions } from 'src/app/mocks/mock-catalogue-functions';

@Component({
  selector: 'app-function-details',
  templateUrl: './function-details.component.html',
  styleUrls: ['./function-details.component.scss']
})
export class FunctionDetailsComponent implements OnInit {
  mockCatalogueFunctions: CatalogFunction[];
  catalogueFunction: CatalogFunction;
  name: string;
  output: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.name = params['name'];
    });
  }

  ngOnInit() {
    this.mockCatalogueFunctions = mockCatalogueFunctions;
    this.catalogueFunction = this.mockCatalogueFunctions.find((o) => o.name === this.name);
  }

  updateOutput(output: any): void {
    this.output = output;
  }
}
