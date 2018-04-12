import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyC4TOG7wemTZK3nKP1FLBSQtJzKm4J4loQ",
      authDomain: "bookshelves-14c5a.firebaseapp.com",
      databaseURL: "https://bookshelves-14c5a.firebaseio.com",
      projectId: "bookshelves-14c5a",
      storageBucket: "bookshelves-14c5a.appspot.com",
      messagingSenderId: "713862357897"
    };
    firebase.initializeApp(config);
  }
}
