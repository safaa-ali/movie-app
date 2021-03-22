import { User } from './user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  public currentUser: Observable<User> = this._currentUserSubject.asObservable();
  user: any[];
  userEmail: any;
  userPassword: any;
  token
  constructor (
    private firestore: AngularFirestore,
    private router: Router,
    public afAuth: AngularFireAuth, // Inject Firebase auth service


  ) { }

  post(collectionName, data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(collectionName)
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  logout() {
    this._currentUserSubject.next(null);
    localStorage.clear();
    // this.router.navigate(['auth/login']);
    window.alert(" you not login now")
  }
  // Sign in with email/password we should have this email and paswword to navigate to guard route
  SignIn(email, password) {

    this.firestore.collection('register').snapshotChanges().subscribe((res: any) => {
      let productdata = []
      res.forEach(item => {
        this.token = { ...item.payload._firestore.sa.options };

        productdata.push({ ...item.payload.doc.data() })
        console.log(productdata);

      });
      productdata.forEach(element => {
        this.userEmail = element.email
        this.userPassword = element.password

      })
      if (this.userEmail === email && this.userPassword === password) {
        localStorage.setItem("satellizer_token", JSON.stringify(this.token))
        this.router.navigate(['home']);

      } else {
        window.alert("Please Sign Up Before ")
        this.router.navigate(['auth/signup']);
      }

    });


  }
  // function to get movies from firbase
  getAll(collectionName) {
    return this.firestore.collection(collectionName).snapshotChanges();
  }
}
