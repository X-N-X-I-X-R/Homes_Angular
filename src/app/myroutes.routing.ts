import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    pathMatch: 'full', 
    title: 'Home page',

   },
   {
    path:'details',
    component:DetailsComponent,
    title:'Details page',
   }
];

export default routes;