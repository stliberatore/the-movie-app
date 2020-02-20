import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiUrlInterceptor } from './services/apiUrl.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieCardComponent,
    NavbarComponent
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
