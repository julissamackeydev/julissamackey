import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FlumeComponent } from './flume/flume.component';
import { EvergreenComponent } from './evergreen/evergreen.component';
import { E2eFriendComponent } from './e2e-friend/e2e-friend.component';
import { MatcherComponent } from './matcher/matcher.component';
import { CzComponent } from './cz/cz.component';
import { MzComponent } from './mz/mz.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FlumeComponent,
    EvergreenComponent,
    E2eFriendComponent,
    MatcherComponent,
    CzComponent,
    MzComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
