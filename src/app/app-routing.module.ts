import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard-list', pathMatch: 'full' },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-film', component: FilmComponent },
  { path: 'app-film-details/:id', component: FilmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
