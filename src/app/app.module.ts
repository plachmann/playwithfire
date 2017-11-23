import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavigationExtras, Router } from "@angular/router";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { Philpage1Component } from "./components/philpage1/philpage1.component";
import { FireComponent } from "./components/fire/fire.component";
import { AskQuestionsComponent } from "./components/ask-questions/ask-questions.component";
import { AlertModule } from "ngx-bootstrap";
import { CarouselModule } from 'ngx-bootstrap';
import { ItemService } from "./services/item-service/item.service";
import { StorageService } from "./services/storage-service/storage.service";
import { AuthService } from "./services/auth-service/auth.service";
import { FlameLink } from "flamelink";
import { FlamelinkplaygroundComponent } from "./components/flamelinkplayground/flamelinkplayground.component";
import { CarouselComponent } from "./components/carousel/carousel.component";

export const firebaseConfig = environment.firebaseConfig;
@NgModule({
  declarations: [
    AppComponent,
    Philpage1Component,
    FireComponent,
    AskQuestionsComponent,
    FlamelinkplaygroundComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [ItemService, StorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {}
}
