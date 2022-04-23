import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public pagination: Array<number> = [];
  page: number = this.movieService.pageContent;

  constructor(public movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {

    this.createPages(this.pagination, this.movieService.pagesCount, this.page);
  }

  showPages(event: any) {


    let url = this.router.url.split(';');

    this.page = +event.target.innerText;
    // console.log(this.page);
    this.movieService.pageContent = this.page;
    if (url[0] === '/search') {
      let query = url[1].split('=');
      this.movieService.search(query[1], this.page);
      // console.log(this.page)
    } else {
      this.movieService.showNavId(this.movieService.genresId, this.page);
      // console.log(this.page)
    }

  }

  nextPage() {
    let url = this.router.url.split(';');
    this.page = this.page + 1;
    this.movieService.pageContent = this.page
    if (url[0] === '/search') {
      let query = url[1].split('=');
      this.movieService.search(query[1], this.page);
      // console.log(this.page)
    } else {
      this.movieService.showNavId(this.movieService.genresId, this.page);
      // console.log(this.page)
    }
  }

  prevPage() {
    let url = this.router.url.split(';');
    this.page = this.page - 1;
    this.movieService.pageContent = this.page
    if (url[0] === '/search') {
      let query = url[1].split('=');
      this.movieService.search(query[1], this.page);
      // console.log(this.page)
    } else {
      this.movieService.showNavId(this.movieService.genresId, this.page);
      // console.log(this.page)
    }
  }

  createPages(pagination: Array<number>, pagesCount: number, currentPage: number) {
    // debugger
    if (pagesCount > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pagination.push(i)
          if (i === pagesCount) break
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pagination.push(i)
          if (i === pagesCount) break
        }
      }
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        pagination.push(i)
      }
    }
  }

}
