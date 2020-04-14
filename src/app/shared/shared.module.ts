import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialModule } from "./material-module/material.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [SideBarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, MatToolbarModule, MatDividerModule],
  exports: [SideBarComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
