import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  @Input() text = '';
  @Input() maxLength = 100;
  original = '';
  showToggleButton = false;
  isCollapsed = false;

  constructor() {}

  ngOnInit() {
    // check if text.length grtr than maxLength
    if (this.text.length > this.maxLength) {
      this.toggleShowToggleButton();
      this.toggleIsCollapsed();
    }

    // store original value
    this.original = this.text;

    // output text based off showToggleButton && isCollapsed
    this.determineView();
  }

  determineView(): void {
    if (this.isCollapsed) {
      this.text = this.text.substring(0, this.maxLength) + '...';
    } else {
      this.text = this.original;
    }
  }

  toggleView($event): void {
    $event.stopPropagation();
    $event.preventDefault();

    this.toggleIsCollapsed();
    this.determineView();
  }

  toggleShowToggleButton(): void {
    this.showToggleButton = !this.showToggleButton;
  }

  toggleIsCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
