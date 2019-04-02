import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, tap, map} from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    dataSet: any;
    loading: boolean;
    //
    message: any; // searchableFunctions
    subscription: Subscription;

    constructor(
      private router: Router,
      private messageService: MessageService
    ) {}

    ngOnInit() {
      this.subscription = this.messageService
          .getSearchableFunctions()
          .subscribe((message) => {
            console.log('search component::subscripted to getSearchableFunctions: ', message);
            this.dataSet = message;
          });
    }

}
