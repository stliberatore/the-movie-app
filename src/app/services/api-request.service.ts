import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmPreview } from '../shared/discover.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private randomPageIndex = '';

  // tslint:disable-next-line: max-line-length
  private dashboardUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=b2750fe3b3a1de17dd2b2ab68603472e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';

  constructor(private http: HttpClient) { }

  randomPage() {
    let indexString = '';
    const index = Math.floor((Math.random() * 500) + 1);
    indexString = index.toString();
    return this.randomPageIndex = indexString;
  }

  getFilmPreview(): Observable<FilmPreview> {
    return this.http.get<FilmPreview>(`${this.dashboardUrl}/${this.randomPageIndex}`);
  }

}
