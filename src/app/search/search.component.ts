import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, tap, map} from 'rxjs/operators';
import { MessageService } from '../services/message.service';

// import { RepoPackagesApiService } from '@app/api'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    dataSet = [];
    loading: boolean;

    constructor(
        private router: Router,
    ) {}

    ngOnInit() {}

}
