import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmPreview } from '../shared/discover.interface';
import { angularMath } from 'angular-ts-math';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private dashboardUrl =
    // tslint:disable-next-line: max-line-length
    'https://api.themoviedb.org/3/discover/movie?api_key=b2750fe3b3a1de17dd2b2ab68603472e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';

  private randomPageIndex = angularMath.getIntegerRandomRange(1, 500);

  constructor(private http: HttpClient) {}

  getFilmPreview(): Observable<FilmPreview> {
    return this.http.get<FilmPreview>(
      `${this.dashboardUrl}${this.randomPageIndex}`
    );
  }
}
