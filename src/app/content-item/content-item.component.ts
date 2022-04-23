import { Component, OnInit } from '@angular/core';
import {MovieService} from "../service/movie.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

  constructor(public movieService: MovieService,private _location: Location) { }

  ngOnInit(): void {
  }
  exit(){
    this._location.back()
  }
}
