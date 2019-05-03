import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogFunctionsComponent } from './catalog-functions/catalog-functions.component';
import { FunctionFormComponent } from './function-form/function-form.component';
import { FunctionsListComponent } from './functions/functions-list/functions-list.component';
import { FunctionDetailsComponent } from './details/function-details/function-details.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'functions' },
    { path: 'functions', component: CatalogFunctionsComponent },
    { path: 'functions/:name', component: FunctionFormComponent },

    { path: 'redo-functions', component: FunctionsListComponent },
    { path: 'redo-functions/:name', component: FunctionDetailsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
