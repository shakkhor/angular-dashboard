import { MatSidenavModule } from "@angular/material/sidenav";
import { SharedModule } from "./../shared/shared.module";
import { DashboardComponent } from "./../modules/dashboard/dashboard/dashboard.component";
import { PostsComponent } from "./../modules/posts/posts.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./components/default/default.component";
@NgModule({
  declarations: [DashboardComponent, DefaultComponent, PostsComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule],
})
export class DefaultModule {}
