import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {ImageManipulationService} from '../image-manipulation.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnChanges {

  constructor(private imgService: ImageManipulationService) { }

  @Input('theta') theta: number;
  public projection;

  updateProjection() {
    this.projection = this.imgService.getProjection(this.theta);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateProjection();
  }

}
