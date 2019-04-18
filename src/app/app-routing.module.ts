import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogFunctionsComponent } from './catalog-functions/catalog-functions.component';
import { FunctionFormComponent } from './function-form/function-form.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'functions' },
    { path: 'functions', component: CatalogFunctionsComponent },
    { path: 'functions/:name', component: FunctionFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
