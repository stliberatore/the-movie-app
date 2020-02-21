import { Component, OnInit, Input } from '@angular/core';
import { FilmDetails} from '../shared/filmDetrails.interface';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() filmDetails;
  constructor() { }

  ngOnInit() {
  }

}

