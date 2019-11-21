import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/homepage/home/home.component';
import { HeaderComponent } from './shared/Header/header.component';
import { AboutComponent } from './modules/about/Components/about/about.component';
import { InterventionalProceduresComponent } from './modules/Interventional Procedures/components/interventional-procedures/interventional-procedures.component';
import { ProcedureCardComponent } from './modules/Interventional Procedures/components/procedure-card/procedure-card.component';
import { HealthyBlogComponent } from './modules/blog/Components/healthy-blog/healthy-blog.component';
import { BlogCardComponent } from './modules/blog/Components/blog-card/blog-card.component';
import { ConsultationComponent } from './modules/consultation&test/components/consultation/consultation.component';
import { ServicesCardComponent } from './modules/consultation&test/components/services-card/services-card.component';
import { HeartAnimationComponent } from './modules/animations/heart-animation/heart-animation.component';
import { MakeappointmentComponent } from './modules/Interventional Procedures/components/makeappointment/makeappointment.component';
import { AddressComponent } from './modules/address/address/address.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './shared/Footer/footer.component';
import { ServicesComponent } from './modules/Services-provided/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    InterventionalProceduresComponent,
    ProcedureCardComponent,
    HealthyBlogComponent,
    BlogCardComponent,
    ConsultationComponent,
    ServicesCardComponent,
    HeartAnimationComponent,
    MakeappointmentComponent,
    AddressComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC2Niewwi7sSyD6F9oEziR9Hm-vOwb0z4g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
