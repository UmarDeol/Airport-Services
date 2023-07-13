import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationbarComponent } from './Components/navigationbar/navigationbar.component';
import { AboutComponent } from './Components/about/about.component';
import { ConferenceComponent } from './Components/conference/conference.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HappyclientsComponent } from './Components/happyclients/happyclients.component';
import { SpeakersComponent } from './Components/speakers/speakers.component';
import { VenueComponent } from './Components/venue/venue.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { ReservelimousineComponent } from './Components/reservelimousine/reservelimousine.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { TestComponent } from './Components/test/test.component';

const routes: Routes = [
  { path: 'navbar', component: NavigationbarComponent},
  { path: 'about', component: AboutComponent},
  { path: 'conference', component: ConferenceComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'happyclients', component: HappyclientsComponent},
  { path: 'reserve', component: ReservelimousineComponent},
  { path: 'speakers', component: SpeakersComponent},
  { path: 'venue', component: VenueComponent},
  { path: 'subscribe', component: SubscribeComponent},
  { path: 'carousal', component: CarouselComponent},
  { path: 'test', component: TestComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
