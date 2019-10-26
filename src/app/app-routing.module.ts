import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/Header/header.component';
import { HomeComponent } from './modules/homepage/home/home.component';
import { AboutComponent } from './modules/about/Components/about/about.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   loadChildren: './modules/site-list/site-list.module#SiteListModule'
  // },
  // { path: 'login', component: SignInComponent },
  // { path: 'signin', component: AuthComponent },
  {
    path: '',
    // redirectTo: '/dashboard/list/active',
    component: HomeComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

