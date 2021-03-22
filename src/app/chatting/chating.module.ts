import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ChatingRoutingModule } from './chating-routing.module';
import { ChattingComponent } from './chatting.component';
import { ChatComponent } from './components/chat/chat.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    ChattingComponent,
    ChatComponent,
    AddRoomComponent,
    RoomListComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    ChatingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSnackBarModule,
    MatSidenavModule,

  ],
  providers:[DatePipe]

})
export class ChatingModule { }
