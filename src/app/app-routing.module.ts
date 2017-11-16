import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Philpage1Component } from "./philpage1/philpage1.component";
import { FireComponent } from "./fire/fire.component";

const routes: Routes = [
  { path: "", component: Philpage1Component },
  {
    path: "fred",
    component: FireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
