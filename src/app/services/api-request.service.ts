import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film, FilmResponse } from '../shared/discover.interface';
import { angularMath } from 'angular-ts-math';
import { FilmDetails } from '../shared/filmDetrails.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private dashboardUrl =
    // tslint:disable-next-line: max-line-length
    'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';
<<<<<<< HEAD
  private filmDetailUrl = 'https://api.themoviedb.org/3/movie'
=======

<<<<<<< HEAD
  private backdropImageUrl = 'https://image.tmdb.org/t/p/w300';

>>>>>>> fix service "getFilmPreview", now it retrieves images
=======
>>>>>>> fix services and slider bar
  private randomPageIndex = angularMath.getIntegerRandomRange(1, 500);

  constructor(private http: HttpClient) { }

  getFilmPreview(): Observable<FilmResponse> {
<<<<<<< HEAD
    return this.http.get<FilmResponse>( `${this.dashboardUrl}${this.randomPageIndex}`
=======
    return this.http.get<FilmResponse>(
      `${this.dashboardUrl}${this.randomPageIndex}`
>>>>>>> fix service "getFilmPreview", now it retrieves images
    );
  }
  getDetail(id: string): Observable<FilmDetails[]> {
    return this.http.get<FilmDetails[]>(`${this.filmDetailUrl}/${id}`);
  }


}


