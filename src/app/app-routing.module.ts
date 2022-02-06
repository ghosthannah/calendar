import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MonthComponent } from "./components/month/month.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "month/:month-id", component: MonthComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
