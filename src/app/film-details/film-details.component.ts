import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';
import { FilmResponse, Film } from '../shared/discover.interface';
import { FilmDetails } from '../shared/filmDetrails.interface';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  filmDetails: FilmDetails[];
  id: string;

  constructor(private route: ActivatedRoute, private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.showDetail(this.id);
  }

  showDetail(id: string): void {
    this.apiRequestService.getDetail(id)
      .subscribe((data: FilmDetails[]) => this.filmDetails = data);
  }


}

