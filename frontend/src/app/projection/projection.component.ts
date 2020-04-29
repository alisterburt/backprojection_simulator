import { Component, OnInit, Input } from '@angular/core';
import {ImageManipulationService} from '../image-manipulation.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent {

  constructor(private imgService: ImageManipulationService) { }

  @Input('theta') theta: number;
  private projection;

  updateProjection() {
    this.projection = this.imgService.getProjection(this.theta);
  }

}
