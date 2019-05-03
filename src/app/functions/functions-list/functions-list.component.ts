import { Component, OnInit, ViewContainerRef, NgZone, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogFunctionsService } from '../../services/catalog-functions.service';
import { CatalogFunction } from '../../models/catalogue-function.model';
import { CatalogFunctionMeta } from '../../models/catalogue-function-meta.model';
import { mockCatalogueFunctions } from 'src/app/mocks/mock-catalogue-functions';

@Component({
  selector: 'app-functions-list',
  templateUrl: './functions-list.component.html',
  styleUrls: ['./functions-list.component.scss']
})
export class FunctionsListComponent implements OnInit {
  mockCatalogueFunctions: CatalogFunction[];
  isLoading = true;
  data: CatalogFunction[];
  defaultDescription = 'There is no description at this time.';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private functionService: CatalogFunctionsService,
    private zone: NgZone,
    // private messageService: MessageService,
    private renderer: Renderer2
  ) {
    this.mockCatalogueFunctions = mockCatalogueFunctions;

    this.data = this.mockCatalogueFunctions;
    // this.handleTagsForEachFunction();
    this.isLoading = false;
  }

  ngOnInit() {
    // this.functionService
    //   .getFunctionsFromCatalogue({})
    //   .subscribe(
    //     (response) => {
    //       this.updateIsLoading();

    //       // TODO: Lock down response from API
    //       if (response[0] instanceof Array) {
    //         this.data = response[0];
    //         console.log('data: ', this.data)
    //       }  // else {
    //       //   this.data = response;
    //       // }

    //       // convert tags from string to string[]
    //       // this.handleDescriptionForEachFunction();
    //       this.handleTagsForEachFunction();
    //       // this.messageService.sendSearchableFunctions(this.data);
    //     },
    //     (error) => {
    //       this.updateIsLoading();
    //       console.log('data: ', this.data);
    //       this.data = this.mockCatalogueFunctions;
    //     }
    //   );
  }

  updateIsLoading() {
    this.isLoading = !this.isLoading;
  }
}
