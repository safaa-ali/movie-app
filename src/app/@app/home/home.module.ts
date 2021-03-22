import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FavouriteViewComponent } from './components/favourite-view/favourite-view.component';
import { SidebarModule } from 'ng-sidebar';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from './../../@shared/shared.module';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [HomeComponent, LandingPageComponent, FavouriteViewComponent, MovieDetailsComponent, CommentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    SidebarModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2SearchPipeModule,
  ]
})
export class HomeModule { }
