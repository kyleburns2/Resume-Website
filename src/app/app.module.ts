import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { RootComponent } from './dashboard/root/root.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WorkComponent } from './dashboard/work/work.component';
import { EducationComponent } from './dashboard/education/education.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { InterestComponent } from './dashboard/interest/interest.component';
import { SettingsService } from './services/settings.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    MsgIconBtnComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    WorkComponent,
    EducationComponent,
    ActivityComponent,
    InterestComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
