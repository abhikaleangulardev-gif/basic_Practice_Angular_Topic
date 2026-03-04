import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'data-binding', loadComponent: () => import('./components/basic-data-binding/basic-data-binding').then((c) => c.BasicDataBinding) },
    { path: 'event-binding', loadComponent: () => import('./components/event-binding/event-binding').then((c) => c.EventBinding) },
    { path: 'ngModel-NgModelChange', loadComponent: () => import('./components/basic-ng-model-ng-model-change/basic-ng-model-ng-model-change').then((c) => c.BasicNgModelNgModelChange) }

];
