import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcomponentComponent } from './acomponent/acomponent.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';

@NgModule({
   declarations: [
      AppComponent,
      AcomponentComponent,
      BcomponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
