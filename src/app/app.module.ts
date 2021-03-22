import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HeaderMenuComponent } from './header-menu/header-menu.component'
import { FooterComponent } from './footer/footer.component'
import { TopComponent } from './top/top.component'
import { SearchComponent } from './search/search.component'
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    FooterComponent,
    TopComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
