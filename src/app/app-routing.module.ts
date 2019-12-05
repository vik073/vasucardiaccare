import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/homepage/home/home.component';
import { ConsultationComponent } from './modules/consultation&test/components/consultation/consultation.component';
import { BookappointmentComponent } from './modules/appointmentpage/components/bookappointment/bookappointment.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
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

