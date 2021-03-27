import { USERS } from './user-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase
    ) { }
  get(url){
    return this.http.get(url)
  }
  getOneMovie(id){
      return this.http.get(`https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=${id}`)
  }
// function to get movies from firbase
  getAll(collectionName) {
    return  this.firestore.collection(collectionName).snapshotChanges();
  }

//   update (collectionName,data) {
//     return this.firestore
//         .collection(collectionName)
//         .doc(data.payload.doc.id)
//         .set({ completed: true }, { merge: true });
//  }
  post(collectionName, data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(collectionName)
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }
  public uploadImage(collectionName,image: File){
    const formData = new FormData();
    formData.append('image', image);
    // return this.http.post('comments', formData);
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(collectionName)
        .add(formData)
        .then(res => { }, err => reject(err));
    });
  }
}
