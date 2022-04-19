import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";

export interface Movie {
  id: number,
  genre_ids: number[] | number,
  original_title:string,
  overview:string,
  poster_path: string,
  release_date: string,
  title: string,
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public movieService: MovieService) {
  }

  ngOnInit(): void {
  }

}
