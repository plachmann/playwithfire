import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Philpage1Component } from "./components/philpage1/philpage1.component";
import { FireComponent } from "./components/fire/fire.component";
import { AskQuestionsComponent } from "./components/ask-questions/ask-questions.component";
import { FlamelinkplaygroundComponent } from "./components/flamelinkplayground/flamelinkplayground.component";
import { CarouselComponent } from "./components/carousel/carousel.component";

const routes: Routes = [
  {
    path: "",
    component: FireComponent
  },
  {
    path: "phil",
    component: Philpage1Component
  },
  {
    path: "questions",
    component: AskQuestionsComponent
  },
  {
    path: "flamelink",
    component: FlamelinkplaygroundComponent
  },
  {
    path: "carousel",
    component: CarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
