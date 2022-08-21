import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UiModule } from '@syncron-sdk-components/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule,
    UiModule,
   ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
