import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogFunctionsComponent } from './catalog-functions/catalog-functions.component';
import { FunctionFormComponent } from './function-form/function-form.component';
import { FunctionsListComponent } from './functions-list/functions-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'functions' },
    { path: 'functions', component: CatalogFunctionsComponent },
    { path: 'functions/:name', component: FunctionFormComponent },

    { path: 'redo-functions', component: FunctionsListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
