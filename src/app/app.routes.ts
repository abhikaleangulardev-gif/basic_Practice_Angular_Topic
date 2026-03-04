import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'data-binding',loadComponent:()=> import('./components/basic-data-binding/basic-data-binding').then((c)=> c.BasicDataBinding)},
     {path:'event-binding',loadComponent:()=> import('./components/event-binding/event-binding').then((c)=> c.EventBinding)}
];
