import { Component, OnInit, ViewContainerRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogFunctionsService } from '../services/catalog-functions.service';

@Component({
  selector: 'app-catalog-functions',
  templateUrl: './catalog-functions.component.html',
  styleUrls: ['./catalog-functions.component.scss']
})
export class CatalogFunctionsComponent implements OnInit {
  isLoading: boolean = true;
  isDataLoaded: boolean = false;
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private service: CatalogService,
    private functionService: CatalogFunctionsService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      this.functionService.getFunctionsFromCatalogue({}).subscribe((catalogFunctions) => {
        this.isLoading = false;
        this.isDataLoaded = true;
        this.data = catalogFunctions[0];

        // convert tags from string to string[]
        this.handleTagsForEachFunction();
      });
    });
  }

  handleTagsForEachFunction() {
    console.log('data: ', typeof this.data, this.data);
    this.data.forEach((o) => {
      if (o.tags && o.tags.length > 0) {
        let spl = o.tags.split(',');
        o.tags = spl;
      }
    });
  }
}
