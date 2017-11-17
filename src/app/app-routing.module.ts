import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Philpage1Component } from "./philpage1/philpage1.component";
import { FireComponent } from "./fire/fire.component";
import { AskQuestionsComponent } from "./ask-questions/ask-questions.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
