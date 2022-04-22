import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public pagination: Array<number> = [];
  @Input()  page: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  // @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(public movieService: MovieService,private router: Router) {
  }

  ngOnInit(): void {
    // console.log(this.page);
    this.createPages(this.pagination, this.movieService.pagesCount,this.page);
    // console.log(this.pagination,this.movieService.pagesCount);
  }
  showPages(event:any){
    // debuggerс
// console.log()
    let url = this.router.url.split(';');
    // let query = url[1].split('=');
    if(this.page===this.movieService.pagesCount){
      console.log('qqqqqqq');
    }
// console.log(event.stopPropagation())
    console.log(this.page,this.movieService.pagesCount);
// console.log()
   this.page = +event.target.innerText;
    this.pageChange.emit(this.page);
    if(url[0]==='/search'){
      let query = url[1].split('=');
      this.movieService.seacrh(query[1],this.page)
    }
    // url[0]==='/search'? this.movieService.seacrh(query[1],this.page):this.movieService.showNavId(this.movieService.genresId,this.page);
    // url[0]==='/search'? console.log('sss'):console.log('qqq');
    // let query = url[1].split('=');
    this.movieService.showNavId(this.movieService.genresId,this.page);
    // console.log(+event.target.innerText);
  }

  nextPage(){
    this.page=this.page+1;
    this.pageChange.emit(this.page);
    this.movieService.showNavId(this.movieService.genresId,this.page);
  }
  prevPage(){
    this.page=this.page-1;
    this.pageChange.emit(this.page);
    this.movieService.showNavId(this.movieService.genresId,this.page);
  }
  createPages(pagination: Array<number>, pagesCount: number, currentPage:number) {
    // let pagesCount = Math.ceil(pagesCount);
    // console.log(currentPage)
    // debugger
    if (pagesCount > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pagination.push(i)
          // debugger
          if (i === pagesCount) break
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pagination.push(i)
          // debugger
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
