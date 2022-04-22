import {Injectable} from "@angular/core";
import {Nav} from "../nav/nav.component";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../content/content.component";

@Injectable({providedIn: 'root'})
export class MovieService {

  public navList: Nav[] = [];
  public stateMovie: Movie[] = [];
  public oneMovie: Movie[] = [];
  public pagesCount: number = 0
  public loading: boolean = true;
  public genresId: number = 0;

  constructor(public http: HttpClient) {
  }

  fetchNav() {
    // debugger
    // console.log(this.http.get<Nav[]>('https://raw.githubusercontent.com/YuryScript/interviewTestFakeApi/main/task.json'))
    //   return this.http.get<Nav[]>('https://raw.githubusercontent.com/YuryScript/interviewTestFakeApi/main/task.json')
    //
    // .pipe(tap(navList => this.navList = navList))
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=df38298bb94103d93e612462f8549e8b&language=en-US')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setTimeout(()=>this.loading=false,3000)
        // data.genres.filter((v,i)=>i!=5);
        // delete data.genres[5];
        // let genres =data.genres;
        // genres.filter((v:number,i:number)=>i!==5);
        // this.navList = data.genres.filter(val => val);
        this.navList = data.genres.filter((v:any,i:number)=>i!=5)
;
        // this.loading = false

      });
    // console.log(this.navList)
  }

  showNavId(id: number=this.genresId,page=1) {

    this.loading = true
    this.genresId = id;
    // console.log(id)
    // debugger
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=df38298bb94103d93e612462f8549e8b&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => this.loading = false, 500)
        this.stateMovie = data.results
        this.pagesCount = data.total_pages
      });
  }

  search(query: string,page:number=1) {
    // console.log(page)
    this.loading = true;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=df38298bb94103d93e612462f8549e8b&language=en-US&include_adult=false&query=${query}&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this.navList = data.genres
        setTimeout(() => this.loading = false, 500)
        this.stateMovie = data.results
        this.pagesCount = data.total_pages
        console.log(data)
      });
  }

  showMovie(id: number) {
    // debugger
    this.oneMovie = this.stateMovie.filter((v) => v.id === id)
    console.log(this.oneMovie)
  }


}
