import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import * as StackTraceParser from 'error-stack-parser';

import { NotificationService } from '../../services/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  // Because the ErrorHandler is created before the providers,m
  // we'll have to use the Injector to get them.
  constructor(
    private injector: Injector,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationService);
    const router = this.injector.get(Router);
    console.log('[ErrorsHandler]: ', error);
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // No Internet connection
        return notificationService.notify('No Internet Connection');
      }
      // Http Error
      return notificationService.notify(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      router.navigate(['/error'], { queryParams: {error: error} });
    }

    // Log the error anyway
    console.error('It happens: ', error);
  }
}
