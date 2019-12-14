import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/homepage/home/home.component';
import { BookappointmentComponent } from './modules/appointmentpage/components/bookappointment/bookappointment.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { BlogpageComponent } from './modules/blog/Components/blogpage/blogpage.component';
import { DoctordetailComponent } from './modules/homepage/doctordetail/doctordetail.component';
const routes: Routes = [

  {
    path: '',
    component: BlogpageComponent,
    pathMatch: 'full',
  },
  // {

  //   path: 'blog',
  //   component: BlogpageComponent,
  //   pathMatch: '',
  // },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    pathMatch: 'full',
  },
  {
    path: 'bookappointment',
    component: BookappointmentComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

