import { Component, OnInit } from '@angular/core';
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }

}
