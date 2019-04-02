import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, tap, map} from 'rxjs/operators';

// import { RepoPackagesApiService } from '@app/api'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Input() searchPlaceholder: string;
    dataSet = [];
    loading: boolean;
    typeaheadEmitter = new EventEmitter<string>();


    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    goToDetail(anaPackage) {
        this.router.navigate(['repo','packages', anaPackage['id'], 'detail']);
    }

    searchRepo(term: string, item: any) {
        console.log(term, item, item['name'].includes(term));
        return item['name'].includes(term);
    }

    getRandomInt() {
     return Math.floor(Math.random() * Math.floor(3));
    }

}
