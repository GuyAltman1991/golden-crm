import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { TopNavBarComponent } from './layout/header/top-nav-bar/top-nav-bar.component';
import { MainComponent } from './layout/main/main/main.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { LogoComponent } from './layout/header/top-nav-bar/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav-bar/hamburger/hamburger.component';
import { LeftNavbarLinksComponent } from './layout/header/top-nav-bar/left-navbar-links/left-navbar-links.component';
import { RightNavbarLinksComponent } from './layout/header/top-nav-bar/right-navbar-links/right-navbar-links.component';
import { SideNavBarComponent } from './layout/main/side-navbar/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MainComponent,
    FooterComponent,
    LogoComponent,
    HamburgerComponent,
    LeftNavbarLinksComponent,
    RightNavbarLinksComponent,
    SideNavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
