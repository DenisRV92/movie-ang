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
  public genresName: Array<string> = [];
  public pageContent = 1;

  constructor(public http: HttpClient) {
  }

  fetchNav() {
    // debugger
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=df38298bb94103d93e612462f8549e8b&language=en-US')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.navList = data.genres.filter((v: any, i: number) => i != 5);
      });
  }

  showNavId(id: number = this.genresId, page = 1) {

    this.loading = true
    this.genresId = id;
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

  search(query: string, page: number = 1) {
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
        // console.log(data)
      });
  }

  showMovie(id: number) {
    // debugger
    this.genresName=[];
    this.oneMovie = this.stateMovie.filter((v) => v.id === id)
    let genre = (<any>this.oneMovie[0]["genre_ids"]);
    for (let i = 0; i < genre.length; i++) {
      for (let k = 0; k < this.navList.length; k++) {
        // console.log(this.navList[k]['id'])
        if (genre[i] === this.navList[k]['id']) {
          this.genresName.push(this.navList[k]['name']);
        }
      }
    }
  }
}
