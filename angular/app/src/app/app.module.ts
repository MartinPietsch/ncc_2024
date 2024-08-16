import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';
import { RunsComponent } from './components/runs/runs.component';

@NgModule({
  declarations: [
    AppComponent,
    RunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SupabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
