import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiUrlInterceptor } from './services/apiUrl.interceptor';
<<<<<<< HEAD
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmComponent } from './film/film.component';
=======

>>>>>>> fix service "getFilmPreview", now it retrieves images
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieCardComponent,
    NavbarComponent,
    FilmDetailsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
