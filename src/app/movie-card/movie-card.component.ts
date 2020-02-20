import { Component, OnInit, Input } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { Film, FilmResponse } from '../shared/discover.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

<<<<<<< HEAD
=======
  public baseImageUrl: 'https://image.tmdb.org/t/p/w300';

>>>>>>> fix service "getFilmPreview", now it retrieves images
  @Input() film: Film[];

  constructor() { }

  ngOnInit() {

  }



}
