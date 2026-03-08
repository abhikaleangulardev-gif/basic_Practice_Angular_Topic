import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'main-binding', pathMatch: 'full' },

    // Data-Binding
    {
        path: 'main-binding',
        loadComponent: () => import('./components/main-data-binding/main-data-binding').then((c) => c.MainDataBinding),
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: 'data-binding', loadComponent: () => import('./components/main-data-binding/basic-data-binding/basic-data-binding').then((c) => c.BasicDataBinding) },
            { path: 'event-binding', loadComponent: () => import('./components/main-data-binding/event-binding/event-binding').then((c) => c.EventBinding) },
            { path: 'ngModel-NgModelChange', loadComponent: () => import('./components/main-data-binding/basic-ng-model-ng-model-change/basic-ng-model-ng-model-change').then((c) => c.BasicNgModelNgModelChange) }
        ]
    },

    // Directive
    {
        path: 'main-directive',
        loadComponent: () => import('./components/main-directive/main-directive').then((c) => c.MainDirective),
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: 'structural-directives', loadComponent: () => import('./components/main-directive/basic-structural-directive/basic-structural-directive').then((c) => c.BasicStructuralDirective) },
            { path: 'attribute-directives', loadComponent: () => import('./components/main-directive/basic-attribute-directive/basic-attribute-directive').then((c) => c.BasicAttributeDirective) },
            { path: 'cutom-directives', loadComponent: () => import('./components/main-directive/basic-custom-directive/basic-custom-directive').then((c) => c.BasicCustomDirective) },
        ]
    },

    // Pipe
    {
        path: 'main-pipe',
        loadComponent: () => import('./components/main-pipe/main-pipe').then((c) => c.MainPipe),
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: 'default-pipe', loadComponent: () => import('./components/main-pipe/default-pipe/default-pipe').then((c) => c.DefaultPipe) }
        ]
    }
];
