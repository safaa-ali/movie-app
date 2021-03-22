import { ChatComponent } from './components/chat/chat.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { SigninComponent } from './components/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';

const routes: Routes = [
  {
    path:'',component:SigninComponent,
    children:[
      { path: '', component: SigninComponent },
      { path: 'roomlist', component: RoomListComponent },
      { path: 'addroom', component: AddRoomComponent },
      { path: 'chatroom/:roomname', component: ChatComponent},

    ],

  },
  { path: 'chat',
  redirectTo: '/chat',
  pathMatch: 'full'
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatingRoutingModule { }
