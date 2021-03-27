import { DataService } from './../../@core/data.service';
import { ConnectionService } from './../../@core/connection.service';
import { AuthService } from './../../@app/auth/service/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  value;
  movies;
  items: any;
  @Output() optionValue = new EventEmitter<any>();
  @Output() try = new EventEmitter<string>()
userName:any
  nameUser: any= "User"
  constructor (
    private _authService: AuthService,
    private _connectionService: ConnectionService,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this._connectionService.get('https://api.tvmaze.com/shows/1/episodes').subscribe(res => {
      this.movies = res
    })
    this.userName = JSON.parse(localStorage.getItem('userInfo'))

this.nameUser = this.userName[0].fName+ " " + this.userName[0].lName



  }
  logout() {
    this._authService.logout()
    this.nameUser="User"

  }


  onChange(value) {
    if (value == 0) {
      this._dataService.sendOptionVAlue(this.movies)

      // this.optionValue.emit(this.items);

    }
    if (value == 1) {
      this.items = this.movies.filter(item => item.season == 1)
      this._dataService.sendOptionVAlue(this.items)
      // this.optionValue.emit(this.items)
      // console.log(this.items);

    }
    else if (value == 2) {
      this.items = this.movies.filter(item => item.season == 2)
      // this.optionValue.emit(this.items)
      // console.log(this.items);
      this._dataService.sendOptionVAlue(this.items)

    }
    else if (value == 3) {
      this.items = this.movies.filter(item => item.season == 3)
      // this.optionValue.emit(this.items)
      // console.log(this.items);
      this._dataService.sendOptionVAlue(this.items)

    }
  }

}
