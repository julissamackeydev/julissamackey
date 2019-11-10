import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { FlumeComponent } from '../app/flume/flume.component';
import { EvergreenComponent } from '../app/evergreen/evergreen.component';
import { E2eFriendComponent } from '../app/e2e-friend/e2e-friend.component';
import { MatcherComponent } from '../app/matcher/matcher.component';
import { CzComponent } from '../app/cz/cz.component';
import { MzComponent } from '../app/mz/mz.component';
import { AboutComponent } from '../app/about/about.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'flume', component: FlumeComponent },
  { path: 'evergreen', component: EvergreenComponent },
  { path: 'e2e-friend', component: E2eFriendComponent },
  { path: 'matcher', component: MatcherComponent },
  { path: 'christian-zaremba', component: CzComponent },
  { path: 'mo-zhou', component: MzComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }