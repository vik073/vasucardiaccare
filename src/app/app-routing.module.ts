import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/homepage/home/home.component';
import { BookappointmentComponent } from './modules/appointmentpage/components/bookappointment/bookappointment.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { BlogpageComponent } from './modules/blog/Components/blogpage/blogpage.component';
import { DoctordetailComponent } from './modules/homepage/doctordetail/doctordetail.component';
import { FAQComponent } from './modules/homepage/faq/faq.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'FAQ',
  //   component: FAQComponent,
  //   pathMatch: 'full',
  // },
  {

    path: 'GetHealthy',
    component: BlogpageComponent,
    pathMatch: 'full',
  },
  { path: 'GetHealthy/:id', component: BlogpageComponent , pathMatch: 'full' },
  {
    path: 'Services',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'About',
  //   component: DoctordetailComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'ContactUs',
  //   component: DoctordetailComponent,
  //   pathMatch: 'full',
  // },
  {
    path: 'Appointment',
    component: BookappointmentComponent,
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

