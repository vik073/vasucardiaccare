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
import { HeartAnimationComponent } from './modules/animations/heart-animation/heart-animation.component';
import { MakeappointmentComponent } from './modules/Interventional Procedures/components/makeappointment/makeappointment.component';
import { AddressComponent } from './modules/address/address/address.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './shared/Footer/footer.component';
import { ServicesComponent } from './modules/Services-provided/services/services.component';
import { BookappointmentComponent } from './modules/appointmentpage/components/bookappointment/bookappointment.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerComponent } from './modules/appointmentpage/components/timepicker/timepicker.component';
import { OwlFormFieldModule, OwlInputModule } from 'owl-ng';
import { MobilecardComponent } from './modules/Interventional Procedures/components/mobilecard/mobilecard.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { BlogpageComponent } from './modules/blog/Components/blogpage/blogpage.component';
import { BlogdetailComponent } from './modules/blog/Components/blogdetail/blogdetail.component';
import { FAQComponent } from './modules/homepage/faq/faq.component';
import { DoctordetailComponent } from './modules/homepage/doctordetail/doctordetail.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './modules/appointmentpage/dialog/dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule , MatButtonModule} from '@angular/material'
import {MatInputModule} from '@angular/material/input'
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

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
    HeartAnimationComponent,
    MakeappointmentComponent,
    AddressComponent,
    ServicesComponent,
    BookappointmentComponent,
    TimepickerComponent,
    MobilecardComponent,
    ContactusComponent,
    BlogpageComponent,
    BlogdetailComponent,
    FAQComponent,
    DoctordetailComponent,
    DialogComponent,
  ],
  entryComponents: [
    DialogComponent
  ],
  providers:[
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  imports: [
    BrowserModule,
    SharedModule,
    OwlDateTimeModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    ReactiveFormsModule,
    OwlFormFieldModule, OwlInputModule,
    BrowserAnimationsModule,
    OwlNativeDateTimeModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC2Niewwi7sSyD6F9oEziR9Hm-vOwb0z4g'
    })
  ],
  // providers: [
  //   {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
