import { MoveiOpionsService } from './../../@core/movei-opions.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  favouriteData: Object;
  constructor (
    private router: Router,
private _moveiOpionsService:MoveiOpionsService
  ) {

  }
  @Input() item: any;

  @Input() data;
  favouritMovie: any = [];
  favouriteStuts: boolean = true;
  like:boolean=true
  ngOnInit(): void {
    this._moveiOpionsService.saveInLocalStorge();
    this.favouritMovie =JSON.parse(localStorage.getItem('favouriteMovie'));

  }



  addFavouriteMovi(movie) {

this._moveiOpionsService.addFavouriteMovie(movie)
    this.favouriteStuts = !this.favouriteStuts;
  }


  removeFavouriteMovi(movieID) {
    if (JSON.parse(localStorage.getItem('favouriteMovie'))) {
      this.favouritMovie = JSON.parse(localStorage.getItem('favouriteMovie'));
      for (let item of this.favouritMovie) {
        if (item.id === movieID) {
          console.log(movieID, " ", item.id);
          console.log(this.favouritMovie.indexOf(item));

          this.favouritMovie.splice(this.favouritMovie.indexOf(item), 1);
          console.log(this.favouritMovie);
          localStorage.setItem('favouriteMovie', JSON.stringify(this.favouritMovie))

        }
      }

      for (let item of this._moveiOpionsService.movies) {
        if (item.id === movieID) {
          this._moveiOpionsService.movies.splice(this._moveiOpionsService.movies.indexOf(item), 1);

        }
      }
    }
    this.favouriteStuts = !this.favouriteStuts;

  }

  likeMovi(movie) {

    this._moveiOpionsService.addLikeMovie(movie)
        this.like = !this.like;

      }
      disLikeMovi(movieID) {
        if (JSON.parse(localStorage.getItem('likeMovie'))) {
          this.favouritMovie = JSON.parse(localStorage.getItem('likeMovie'));
          for (let item of this.favouritMovie) {
            if (item.id === movieID) {
              console.log(movieID, " ", item.id);
              console.log(this.favouritMovie.indexOf(item));

              this.favouritMovie.splice(this.favouritMovie.indexOf(item), 1);
              console.log(this.favouritMovie);
              localStorage.setItem('likeMovie', JSON.stringify(this.favouritMovie))

            }
          }

          for (let item of this._moveiOpionsService.movies) {
            if (item.id === movieID) {
              this._moveiOpionsService.movies.splice(this._moveiOpionsService.movies.indexOf(item), 1);

            }
          }
        }
        // this._moveiOpionsService.addFavouriteMovie(movie)
            this.like = !this.like;
          }
  toMovieDetails(id) {
    this.router.navigate([`/home/movie-details/${id}`])
    console.log("hi from details");

  }
}
