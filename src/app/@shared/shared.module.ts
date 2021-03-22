import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
// Imported syncfusion sidebar module from navigations package
import { SidebarModule, MenuAllModule, TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    FooterComponent,
    MovieCardComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule,
    FormsModule,
    RouterModule,

    MenuAllModule,
     TreeViewAllModule,
     ListViewAllModule,
     ButtonModule,
     RadioButtonModule,
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    MovieCardComponent,

  ]
})
export class SharedModule { }
