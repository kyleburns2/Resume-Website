/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { WorkComponent } from './dashboard/work/work.component';
import { EducationComponent } from './dashboard/education/education.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { InterestComponent } from './dashboard/interest/interest.component';
import { RootComponent } from './dashboard/root/root.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'work', component: WorkComponent},
    {path: 'education', component: EducationComponent},
    {path: 'activity', component: ActivityComponent},
    {path: 'interest', component: InterestComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'settings', component: SettingsComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

