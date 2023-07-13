import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavigationbarComponent } from './Components/navigationbar/navigationbar.component';
import { SliderComponent } from './Components/slider/slider.component';
import {MatIconModule} from '@angular/material/icon';
import { VenueComponent } from './Components/venue/venue.component';
import { AboutComponent } from './Components/about/about.component';
import { ConferenceComponent } from './Components/conference/conference.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HappyclientsComponent } from './Components/happyclients/happyclients.component';
import { SpeakersComponent } from './Components/speakers/speakers.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ReservelimousineComponent } from './Components/reservelimousine/reservelimousine.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { TestComponent } from './Components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    SliderComponent,
    VenueComponent,
    AboutComponent,
    ConferenceComponent,
    GalleryComponent,
    HappyclientsComponent,
    SpeakersComponent,
    SubscribeComponent,
    FooterComponent,
    ReservelimousineComponent,
    CarouselComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
