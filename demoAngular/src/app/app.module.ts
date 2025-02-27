import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ChronoComponent } from './exercice/components/chrono/chrono.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { NavLinkWithChildrenComponent } from './components/nav-link-with-children/nav-link-with-children.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    NavLinkComponent,
    NavLinkWithChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
