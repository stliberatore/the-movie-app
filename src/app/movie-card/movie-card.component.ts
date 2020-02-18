import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { FilmPreview } from '../shared/discover.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  film: FilmPreview;

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.getFilmPreview();
  }

  getFilmPreview(): void {
    this.apiRequestService
      .getFilmPreview()
      .subscribe((res: FilmPreview) => (this.film = res));
  }
}
