import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from "@angular/common/http";
import {ContentComponent} from './content/content.component';
import {FormsModule} from "@angular/forms";
import {LoaderComponent} from './loader/loader.component';
import {ContentItemComponent} from './content-item/content-item.component';
import {PaginationComponent} from './pagination/pagination.component';
import {NavBurgerComponent} from './nav-burger/nav-burger.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    LoaderComponent,
    ContentItemComponent,
    PaginationComponent,
    NavBurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
