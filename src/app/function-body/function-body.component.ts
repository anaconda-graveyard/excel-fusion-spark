import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function-body',
  templateUrl: './function-body.component.html',
  styleUrls: ['./function-body.component.scss']
})
export class FunctionBodyComponent implements OnInit {
  @Input() description: string;
  @Input() tags: any;

  constructor() {}

  ngOnInit() {
    console.log('this.description', this.description);
    console.log('this.tags', this.tags);
    this.handleTagsForEachFunction();
  }

  handleTagsForEachFunction(): void {
    if (this.tags && this.tags.length > 0) {
      const arr = this.tags.split(','); // this.tags initially a string
      this.tags = arr.map((o) => {
        return o.trim();
      });

      console.log('tags: ', this.tags, typeof(this.tags));
    }
  }
}
