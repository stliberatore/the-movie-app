import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';
import { FilmPreview } from '../shared/discover.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  id: any;
  filmData: any;

  constructor(private route: ActivatedRoute, private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.showDetail(this.id);
  }

  showDetail(id: string): void {
    this.apiRequestService
      .getDetail(id)
      .subscribe((data: FilmPreview[]) => this.filmData = data);
  }
}
