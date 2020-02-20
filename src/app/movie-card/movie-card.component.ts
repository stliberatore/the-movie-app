import { Component, OnInit, Input } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { Film, FilmResponse } from '../shared/discover.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() film: Film[];

  constructor() { }

  ngOnInit() {

  }



}
