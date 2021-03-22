import { Component,  OnInit ,  AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-favourite-view',
  templateUrl: './favourite-view.component.html',
  styleUrls: ['./favourite-view.component.scss']
})
export class FavouriteViewComponent implements OnInit ,AfterContentInit{
  favouriteData
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('favouriteMovie') === null) {
      this.favouriteData = []
    } else {
      this.favouriteData = JSON.parse(localStorage.getItem('favouriteMovie'));
      console.log(this.favouriteData);
    }

  }

  ngAfterContentInit(){
    if (localStorage.getItem('favouriteMovie') === null) {
      this.favouriteData = []
    } else {
      this.favouriteData = JSON.parse(localStorage.getItem('favouriteMovie'));
      console.log(this.favouriteData);
    }

  }

}
