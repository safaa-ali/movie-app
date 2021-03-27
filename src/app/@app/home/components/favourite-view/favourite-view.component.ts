import { DataService } from './../../../../@core/data.service';
import { Component,  OnInit ,  AfterContentInit } from '@angular/core';
@Component({
  selector: 'app-favourite-view',
  templateUrl: './favourite-view.component.html',
  styleUrls: ['./favourite-view.component.scss']
})
export class FavouriteViewComponent implements OnInit{
  favouriteData
  constructor(private _dataService:DataService

    ) {

      if (localStorage.getItem('favouriteMovies') === null) {
        this.favouriteData = []
      } else {
        this.favouriteData = JSON.parse(localStorage.getItem('favouriteMovies'));
//  this._dataService.newFavouritMovieItems.subscribe(res=>{
//       console.log(res);

//       this.favouriteData =res;

//     })
     }
    }

  ngOnInit(): void {

  
  }

}
