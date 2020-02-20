import { Component, OnInit, Input } from '@angular/core';
import { Film, FilmResponse } from '../shared/discover.interface';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() film: Film[];

  constructor(private apiRequestService: ApiRequestService) {}

  ngOnInit() {
    this.getFilmPreview();
  }

  getFilmPreview(): void {
    this.apiRequestService.getFilmPreview()
      .subscribe((res: FilmResponse) => this.film = res.results);
  }

}
