//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3"

  constructor(public http: Http) {
    //console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=`+'d10fd1b179757817d390583bb9fe6708');
  }

  getMovieDetails(movie_id){
    return this.http.get(this.baseApiPath + `/movie/${movie_id}?api_key=` + 'd10fd1b179757817d390583bb9fe6708');
  }


}
