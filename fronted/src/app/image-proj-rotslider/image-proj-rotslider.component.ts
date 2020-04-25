import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-proj-rotslider',
  templateUrl: './image-proj-rotslider.component.html',
  styleUrls: ['./image-proj-rotslider.component.css']
})
export class ImageProjRotsliderComponent implements OnInit {
  image = './image_rotated.png';
  constructor() { }

  ngOnInit(): void {
  }

}
