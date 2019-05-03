import { Component, OnInit, ViewContainerRef, NgZone, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogFunctionsService } from '../services/catalog-functions.service';
import { CatalogFunction } from '../models/catalogue-function.model';
import { CatalogFunctionMeta } from '../models/catalogue-function-meta.model';

@Component({
  selector: 'app-functions-list',
  templateUrl: './functions-list.component.html',
  styleUrls: ['./functions-list.component.scss']
})
export class FunctionsListComponent implements OnInit {
  mockCatalogueFunctions: CatalogFunction[];
  isLoading: boolean = true;
  data: CatalogFunction[];
  defaultDescription: string = 'There is no description at this time.';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private functionService: CatalogFunctionsService,
    private zone: NgZone,
    // private messageService: MessageService,
    private renderer: Renderer2
  ) {
    const fi = { name: 'my_scotch', type: 'str'};
    const meta = new CatalogFunctionMeta(
      'make_rec', '', [fi]
    );

    this.mockCatalogueFunctions = [
      new CatalogFunction(
        // tslint:disable-next-line: max-line-length
        'Make recommendations about the close Scotches to the selected scotch based on custom scotch based passed as input. Make recommendations about the close Scotches to the selected scotch based on custom scotch based passed as input.', //description
        'make_rec', // name
        'ml, ai', // tags
        'www.espn.com', // url
        [meta],
        false
      )
    ];

    this.data = this.mockCatalogueFunctions;
    this.handleTagsForEachFunction();
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

  handleTagsForEachFunction() {
    this.data.forEach((o) => {
      if (o.tags && o.tags.length > 0) {
        const spl = o.tags.split(',');
        o.tags = spl;
      }
    });
  }

  updateIsLoading() {
    this.isLoading = !this.isLoading;
  }
}
