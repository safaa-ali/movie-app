import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private optionVal = new BehaviorSubject(0);
  sendOptionVal = this.optionVal.asObservable()

  private newFavouritMovie = new BehaviorSubject([]);
  newFavouritMovieItems = this.newFavouritMovie.asObservable()

  tempData = JSON.parse(localStorage.getItem('favouriteMovies'))
    favouritMovies = this.tempData;

  tempMovies = [] //
  movies = []

  constructor(private http: HttpClient) {
    this.newFavouritMovie = this.favouritMovies

  }

  removeMovie(movieID){
    this.favouritMovies = this.favouritMovies.filter(movie => movie.id !== movieID)
    localStorage.setItem('favouriteMovies', JSON.stringify(this.favouritMovies));
    console.log(this.favouritMovies);

  }

  filterData(sesson){
    this.movies = this.tempData(movie => movie.sesson=== sesson);

  }
  sendOptionVAlue(value) {
    this.optionVal.next(value);
  }



}
