import { ConnectionService } from './../../../../@core/connection.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']

})
export class LandingPageComponent implements OnInit {
  movie ;
  searchText = "";
  constructor (
    private _connectionServ: ConnectionService,
  ) {

  }

  ngOnInit(): void {

    this._connectionServ.get('https://api.tvmaze.com/shows/1/episodes').subscribe(res => {
      console.log(res);
      this.movie = res

    })
    // use firbase data
    // this._connectionServ.getAll("movies").subscribe((res: any) => {

    //   console.log(res);
    //   let productdata = []
    //   res.forEach(element => {

    //     productdata.push({ fireId: element.payload.doc.id, ...element.payload.doc.data() })
    //   });

    //   console.log(productdata);
    //   this.movie = [...productdata]
    // })
  }



}
