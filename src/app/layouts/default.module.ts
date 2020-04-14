import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "../modules/dashboard/dashboard/dashboard.component";
import { DefaultComponent } from "./components/default/default.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class DefaultModule {}
