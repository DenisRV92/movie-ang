import {Component, OnInit, SimpleChanges} from '@angular/core';
import {MovieService} from "../service/movie.service";
// import { Subject } from 'rxjs';
export interface Movie {
  id: number,
  genre_ids: number[] | number,
  original_title: string,
  overview: string,
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
  public pageContent = 1;


  constructor(public movieService: MovieService) {
    // console.log(movieService.stateMovie)
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  showIdMovie(id: number) {
    // console.log(id)
    this.movieService.showMovie(id);
  }
}
