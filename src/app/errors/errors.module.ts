import { CommonModule } from '@angular/common';
import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorsInterceptor } from './server-errors-interceptor/server-errors.interceptor';
import { ErrorsHandler } from './errors-handler/errors-handler';
import { ErrorsComponent } from './errors-component/errors.component';
import { ErrorRoutingModule } from './errors-routing/errors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorRoutingModule
  ],
  declarations: [
    ErrorsComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    }
  ]
})
export class ErrorsModule { }
