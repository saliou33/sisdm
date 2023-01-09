import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";


@NgModule({
  imports: [BrowserModule, SharedModule, RouterModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
