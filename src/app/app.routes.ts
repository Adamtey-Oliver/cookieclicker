import { Routes } from '@angular/router';
import { CookieclickerComponent } from './cookieclicker/cookieclicker.component';

export const routes: Routes = [
    {
        path:'', redirectTo: 'cookieclicker', pathMatch:'full'
    },
    {
        path:'cookieclicker', component: CookieclickerComponent
    }
];
