import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CatalogFunctionsComponent } from './catalog-functions/catalog-functions.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { FunctionFormComponent } from './function-form/function-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CatalogFunctionsService } from './services/catalog-functions.service';
import { FusionSparkService } from './services/fusion-spark.service';
import { FunctionFormOutputComponent } from './function-form-output/function-form-output.component';
import { FunctionsListComponent } from './functions/functions-list/functions-list.component';
import { FunctionBodyComponent } from './functions/function-body/function-body.component';
import { ReadMoreComponent } from './functions/read-more/read-more.component';
import { FunctionDetailsComponent } from './details/function-details/function-details.component';
import { FunctionDetailsFormComponent } from './details/function-details-form/function-details-form.component';
import { FunctionDetailsOutputComponent } from './details/function-details-output/function-details-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogFunctionsComponent,
    FunctionFormComponent,
    SearchComponent,
    FunctionFormOutputComponent,
    FunctionsListComponent,
    FunctionBodyComponent,
    ReadMoreComponent,
    FunctionDetailsComponent,
    FunctionDetailsFormComponent,
    FunctionDetailsOutputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates : false,
      iconClasses : {
          info: 'toast-anaconda'
      }
    }),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ToastContainerModule,
    AppRoutingModule,
  ],
  providers: [
    FusionSparkService,
    CatalogFunctionsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
