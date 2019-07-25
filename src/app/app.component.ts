import '../assets/scss/main.scss';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notification: string;
  showNotification: boolean;

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.notificationService
      .notification$
      .subscribe(message => {
        debugger;
        console.log('[AppComponent] [this.notificationService] subscribed.')
        this.notification = message;
        this.showNotification = true;
      })

  }
}
