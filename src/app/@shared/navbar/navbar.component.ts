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
  movie;

  constructor(
    private _authService:AuthService,
private _connectionService:ConnectionService
    ) { }

  ngOnInit(): void {

  }
  logout(){
this._authService.logout()
  }



}
