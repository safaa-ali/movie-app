import { Component, ViewChild } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
// const config = {
//   apiKey:'AIzaSyAfSzi0Rhp-Y_efZTaXzAaXHMK_2DYy8nE',
//   dataBaseUrl:'https://movie-4c881-default-rtdb.firebaseio.com'
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // item$: Observable<any[]>;
  constructor (firestore: AngularFirestoreModule,
    private AngularFireModule: AngularFireStorageModule,
     private AngularFireAuthModule: AngularFireAuthModule,
     private AngularFirestore:AngularFirestore
     ) {
    // this.item$ = firestore.collection('items').valueChanges();
    // firestore.collection(config)

  }
  title = 'Movie App';

  successAlert = false;


  // copyToClipboard(value: string): void {
  //   const tempInput = document.createElement("input");
  //   tempInput.value = value;
  //   document.body.appendChild(tempInput);
  //   tempInput.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(tempInput);

  //   this.successAlert = true;

  //   setTimeout(() => {
  //     this.successAlert = false;
  //   }, 900);
  // }

}
