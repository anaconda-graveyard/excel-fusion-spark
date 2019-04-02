import { Component, OnInit, ViewContainerRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogFunctionsService } from '../services/catalog-functions.service';
import { MessageService } from '../services/message.service';

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
    private zone: NgZone,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      console.log('window location within catalog functions: ', window.location.href);
      this.functionService.getFunctionsFromCatalogue({}).subscribe((catalogFunctions) => {
        this.isLoading = false;
        this.isDataLoaded = true;
        if (catalogFunctions[0] instanceof Array){
          this.data = catalogFunctions[0];
        }else{
          this.data = catalogFunctions;
        }

        // convert tags from string to string[]
        this.handleTagsForEachFunction();
        this.messageService.sendSearchableFunctions(this.data);
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
