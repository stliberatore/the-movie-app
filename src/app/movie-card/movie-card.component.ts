import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiRequestService } from '../services/api-request.service';
import { Film, FilmResponse } from '../shared/discover.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() film: Film[];
  @Input() filmResponse: FilmResponse[];

  constructor() { }

  ngOnInit() {

  }



}
