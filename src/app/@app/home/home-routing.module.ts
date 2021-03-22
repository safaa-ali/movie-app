import { AuthGuard } from './../../@core/auth.guard';
import { CommentComponent } from './components/comment/comment.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FavouriteViewComponent } from './components/favourite-view/favourite-view.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {
        path:'',component:LandingPageComponent,
      },
      {
        path:'favourite-movie',component:FavouriteViewComponent,
        // canActivate:[AuthGuard]

      },
      {
        path:'movie-details/:id',component:MovieDetailsComponent,
      },
      {
        path:'comment',component:CommentComponent,
        // canActivate:[AuthGuard]

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
