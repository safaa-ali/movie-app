import { DataService } from './../../../../@core/data.service';
import { ConnectionService } from './../../../../@core/connection.service';
import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']

})
export class LandingPageComponent implements OnInit {
  movie;
  searchText = "";

  constructor (
    private _connectionServ: ConnectionService,
    private ref: ChangeDetectorRef,
    private _dataService: DataService
  ) {

  }

  ngOnInit(): void {
    this._connectionServ.get('https://api.tvmaze.com/shows/1/episodes').subscribe(res => {
      this.movie = res

    })
    this._dataService.sendOptionVal.subscribe(movies => {
      this.movie = movies
    });
  }



}




