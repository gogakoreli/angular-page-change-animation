import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TechnologyComponent, ScienceComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
