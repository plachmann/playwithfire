import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavigationExtras, Router } from '@angular/router';
import { environment } from "../environments/environment";
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { Philpage1Component } from "./philpage1/philpage1.component";
import { FireComponent } from './fire/fire.component';

@NgModule({
  declarations: [AppComponent, Philpage1Component, FireComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {}
}
