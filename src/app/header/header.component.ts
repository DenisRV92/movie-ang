import { Component, OnInit } from '@angular/core';
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = '';
  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }
  guery(){
    debugger
    this.movieService.seacrh(this.title);
  }
}
