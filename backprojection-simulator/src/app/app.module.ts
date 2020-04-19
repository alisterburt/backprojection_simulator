import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageProjRotsliderComponent } from './image-proj-rotslider/image-proj-rotslider.component';
import { RotsliderComponent } from './rotslider/rotslider.component';
import { ProjectionComponent } from './projection/projection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageManipulationService } from './image-manipulation.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageProjRotsliderComponent,
    RotsliderComponent,
    ProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImageManipulationService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
