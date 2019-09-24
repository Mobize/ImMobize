import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyBr2ybn-0_lb8I7hj9tRz0qVu879fe1au0',
      authDomain: 'immobize.firebaseapp.com',
      databaseURL: 'https://immobize.firebaseio.com',
      projectId: 'immobize',
      storageBucket: 'immobize.appspot.com',
      messagingSenderId: '740547579414',
      appId: '1:740547579414:web:2f5f45c8f274c71184ef37'
    };
    firebase.initializeApp(config);
  }
}
