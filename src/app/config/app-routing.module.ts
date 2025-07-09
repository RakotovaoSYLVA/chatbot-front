import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "../presentation/pages/auth/auth.component";
import { DashboardComponent } from "../presentation/pages/dashboard/dashboard.component";
import { routes } from "../app.routes";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
