import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PelisViewComponent } from './pelis-view/pelis-view.component';
import { SeriesViewComponent } from './series-view/series-view.component';
import { LoginComponent } from './login/login.component';
import { PelisDetailComponent } from './pelis-detail/pelis-detail.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'films',
        component:PelisViewComponent
    },
    {
        path: 'film/:id',
        component:PelisDetailComponent
    },
    {
        path: 'shows',
        component:SeriesViewComponent
    },
    {
        path: 'show/:id',
        component:SerieDetailComponent
    }
];
