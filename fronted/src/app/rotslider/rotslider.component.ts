import {Component, Input, OnInit} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';
import { ImageManipulationService } from '../image-manipulation.service';

@Component({
  selector: 'app-rotslider',
  templateUrl: './rotslider.component.html',
  styleUrls: ['./rotslider.component.css']
})
export class RotsliderComponent implements OnInit {
  public value = 0;

  private service: ImageManipulationService

  onInputChange(event: MatSliderChange) {
    console.log("Slider value changed to:")
    console.log(event.value)
    this.value = event.value
    this.service.rotateImage(this.value)

  }



  constructor(service: ImageManipulationService) {
    this.service = service
  }

  ngOnInit(): void {
  }

}
