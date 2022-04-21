import {Injectable} from "@angular/core";
import {Nav} from "../nav/nav.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Movie} from "../content/content.component";

@Injectable({providedIn: 'root'})
export class MovieService {

  public navList: Nav[] = [];
  public stateMovie: Movie[] = [];
  public oneMovie:Movie[] =[];
  public loading: boolean = true;

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
        this.navList = data.genres
        this.loading=false
        console.log(this.navList)
      });
    // console.log(this.navList)
  }

  showNavId(id: number) {
    this.loading=true
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=df38298bb94103d93e612462f8549e8b&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(()=>this.loading=false,500)
        this.stateMovie=data.results
        // this.loading=false
        // this.stateMovie=data.results
        debugger
        console.log(data)
      });
    // console.log(id);
  }
  seacrh(query:string){
    this.loading=true;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=df38298bb94103d93e612462f8549e8b&language=en-US&include_adult=false&query=${query}&page=1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this.navList = data.genres
        setTimeout(()=>this.loading=false,500)
        this.stateMovie=data.results
        // this.loading=false
        console.log(data)
      });
  }

  showMovie(id:number){
    // debugger
    this.oneMovie = this.stateMovie.filter((v)=>v.id===id)
    console.log(this.oneMovie )
  }

}
