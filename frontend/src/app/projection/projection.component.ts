import { Component, OnInit } from '@angular/core';
import {ImageManipulationService} from "../image-manipulation.service";

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  constructor(private imgService : ImageManipulationService) { }



  ngOnInit(): void {
  }

}
