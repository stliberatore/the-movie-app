import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film, FilmResponse } from '../shared/discover.interface';
import { angularMath } from 'angular-ts-math';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private dashboardUrl =
    // tslint:disable-next-line: max-line-length
    'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';

  private randomPageIndex = angularMath.getIntegerRandomRange(1, 500);

  constructor(private http: HttpClient) {}

  getFilmPreview(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
      `${this.dashboardUrl}${this.randomPageIndex}`
    );
  }
}
