import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'main-binding',pathMatch:'full'},
    {
        path: 'main-binding',
        loadComponent: () => import('./components/main-data-binding/main-data-binding').then((c) => c.MainDataBinding),
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: 'data-binding', loadComponent: () => import('./components/main-data-binding/basic-data-binding/basic-data-binding').then((c) => c.BasicDataBinding) },
            { path: 'event-binding', loadComponent: () => import('./components/main-data-binding/event-binding/event-binding').then((c) => c.EventBinding) },
            { path: 'ngModel-NgModelChange', loadComponent: () => import('./components/main-data-binding/basic-ng-model-ng-model-change/basic-ng-model-ng-model-change').then((c) => c.BasicNgModelNgModelChange) }
        ]
    }
];
