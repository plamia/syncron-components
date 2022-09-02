import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [HttpClient, HttpClientModule],
  declarations: [
    TooltipComponent,
    SpinnerComponent,
    HeaderComponent,
  ],
  exports: [
    TooltipComponent,
    HeaderComponent,
    AgGridModule,
    MatSliderModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UiModule {}
