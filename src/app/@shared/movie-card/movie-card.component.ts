import { DataService } from './../../@core/data.service';
import { filter } from 'rxjs/operators';
import { MoveiOpionsService } from './../../@core/movei-opions.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  favouriteData: Object;
  isFavouritePage = window.location.href.includes('favourite');

  constructor (
    private router: Router,
    private _moveiOpionsService: MoveiOpionsService,
    private _dataService:DataService
  ) {
this.favouritMovies = JSON.parse(localStorage.getItem('favouriteMovies'))
  }
  @Input() item: any;

  @Input() data;
  @Output() movieId
  favouritMovies: any = [];
  favouriteStuts: boolean = true;
  like: boolean = true
  ngOnInit(): void {
    this._moveiOpionsService.saveInLocalStorge();

  }



  addFavouriteMovi(movie) {

    this._moveiOpionsService.addfavouriteMovie(movie)
    this.favouriteStuts = !this.favouriteStuts;
  }


  removeFavouriteMovie(movieID) {
    if (confirm("are you sure to delete this movie !") === true) {
      if (JSON.parse(localStorage.getItem('favouriteMovies'))) {
        this.favouritMovies = JSON.parse(localStorage.getItem('favouriteMovies'));
        for (let item of this.favouritMovies) {
          if (item.id === movieID) {
            this.favouritMovies.splice(this.favouritMovies.indexOf(item), 1);
            localStorage.setItem('favouriteMovies', JSON.stringify(this.favouritMovies))

          }
        }

      }


    } else {
      return false
    }
    this.favouriteStuts = !this.favouriteStuts;
    JSON.parse(localStorage.getItem('favouriteMovies'));
  }

  likeMovi(movie) {
    this._moveiOpionsService.addLikeMovie(movie)
    this.like = !this.like;
  }

  disLikeMovi(movieID) {
    if (JSON.parse(localStorage.getItem('likeMovie'))) {
      this.favouritMovies = JSON.parse(localStorage.getItem('likeMovie'));
      for (let item of this.favouritMovies) {
        if (item.id === movieID) {
          this.favouritMovies.splice(this.favouritMovies.indexOf(item), 1);
          localStorage.setItem('likeMovie', JSON.stringify(this.favouritMovies))

        }
      }
    }
    this.like = !this.like;
  }
  toMovieDetails(id) {
    this.router.navigate([`/home/movie-details/${id}`])

  }
}
