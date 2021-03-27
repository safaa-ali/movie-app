import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveiOpionsService {
movies: any = [];
flag: boolean;

  constructor() { }



addfavouriteMovie(movie){

  this.flag = false
  for (let item of this.movies) {
    if (item.id === movie.id) {
      this.flag = true;
    }
  }
  // push one item of  movie to localstorge
  if (this.flag == false) {
    movie['qty'] = 0;
    this.movies.push(movie);

  }

  // save movie in local Storage
  for (let item of this.movies) {
    if (item.id === movie.id) {
      // console.log(this.movies);
      localStorage.setItem('favouriteMovies', JSON.stringify(this.movies));
      console.log(this.movies);
    }
  }
}



addLikeMovie(movie){

  this.flag = false
  for (let item of this.movies) {
    if (item.id === movie.id) {
      this.flag = true;
    }
  }
  // push one item of  movie to localstorge
  if (this.flag == false) {
    movie['qty'] = 0;
    this.movies.push(movie);

  }

  // save movie in local Storage
  for (let item of this.movies) {
    if (item.id === movie.id) {
      // console.log(this.movies);
      localStorage.setItem('likeMovie', JSON.stringify(this.movies));
      console.log(this.movies);
    }
  }
}

    // Save In LocalStorage
    saveInLocalStorge() {
      // check if shopping cart is empty or not
      if (localStorage.getItem('favouriteMovies') === null) {
        this.movies = []
      } else {
        this.movies = JSON.parse(localStorage.getItem('favouriteMovies'));
        // console.log(this.products);
      }
    }
}
