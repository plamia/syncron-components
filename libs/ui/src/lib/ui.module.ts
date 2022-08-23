import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { TooltipComponent } from "./components/tooltip/tooltip.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [CommonModule, HttpClientModule, AgGridModule, MatSliderModule, MatTooltipModule],
  providers: [HttpClient, HttpClientModule],
  declarations: [TooltipComponent],
  exports: [AgGridModule, TooltipComponent, MatSliderModule, MatTooltipModule],
})
export class UiModule {}
