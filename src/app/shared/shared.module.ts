import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialModule } from "./material-module/material.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { MatDividerModule } from "@angular/material/divider";
import { FlexLayoutModule } from "@angular/flex-layout";
import { from } from "rxjs";
import { MatMenuModule } from "@angular/material/menu";
import { ChartModule } from "angular-highcharts";
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";
@NgModule({
  declarations: [SideBarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    ChartModule,
  ],
  exports: [SideBarComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
