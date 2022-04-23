import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from "../service/movie.service";


@Component({
  selector: 'app-nav-burger',
  templateUrl: './nav-burger.component.html',
  styleUrls: ['./nav-burger.component.scss']
})
export class NavBurgerComponent implements OnInit {
  @ViewChild("openSidebarMenu") block: any;

  constructor(public movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  toggle(event: any) {

    event.path[4]['children'][0]['children'][0].checked = !event.path[4]['children'][0]['children'][0].checked
    event = event.target

    let navList = this.movieService.navList;
    for (let i = 0; i < navList.length; i++) {
      //   // console.log(event);
      if (event.text === navList[i]["name"]) {
        let id = this.movieService.navList[i]['id'];
        this.movieService.showNavId(id)
      }
    }
  }
}
