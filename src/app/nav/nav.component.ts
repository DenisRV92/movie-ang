import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";


export interface Nav {
  id: number,
  name: string,
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // page: number = 1;
  constructor(public movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.fetchNav()
      // .pipe(delay(2000))
      // .subscribe(() => {
      // });
    // debugger
  }
  showNavId(id: number){
    this.movieService.pageContent=1;
        this.movieService.showNavId(id);
        // this.page.page=1
  }
}
