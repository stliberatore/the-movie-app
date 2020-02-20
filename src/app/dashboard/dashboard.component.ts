import { Component, OnInit, Input } from '@angular/core';
import { Film, FilmResponse } from '../shared/discover.interface';
import { ApiRequestService } from '../services/api-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetails } from '../shared/filmDetrails.interface'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() film: Film[];
  @Input() filmData: FilmResponse;

  constructor(private apiRequestService: ApiRequestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getFilmPreview();
  }

  getFilmPreview(): void {
    this.apiRequestService.getFilmPreview()
      .subscribe((res: FilmResponse) => this.film = res.results);
  }

}
