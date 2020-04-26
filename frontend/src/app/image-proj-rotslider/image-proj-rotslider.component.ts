import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";
import {MatSliderChange} from "@angular/material/slider";
import {ImageManipulationService} from "../image-manipulation.service";

@Component({
  selector: 'app-image-proj-rotslider',
  templateUrl: './image-proj-rotslider.component.html',
  styleUrls: ['./image-proj-rotslider.component.css']
})
export class ImageProjRotsliderComponent  {
  private readonly rotatedFileName = "rotated.png";
  public value = 0;

  public image;

  constructor(private backendService: BackendService, private imgService: ImageManipulationService) {
    this.image = this.generateRandomUrl();
  }

  onInputChange(event: MatSliderChange) {
    console.log(`Slider value changed to: ${event.value}`)
    this.value = event.value
    this.imgService.rotateImage(this.value)
    this.image = this.generateRandomUrl();
  }

  private generateRandomUrl() {
    return this.backendService.getStatsPublicUrl(this.rotatedFileName + '?random\=' + Math.random());
  }


}
