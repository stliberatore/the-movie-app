import { Component, OnInit, Input } from '@angular/core';
import { FilmPreview } from '../shared/discover.interface';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
