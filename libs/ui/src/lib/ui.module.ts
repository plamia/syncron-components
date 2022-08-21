import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    AgGridModule,
  ],
  providers: [HttpClient, HttpClientModule],
  declarations: [TooltipComponent],
  exports: [AgGridModule, TooltipComponent ],
})
export class UiModule {}
