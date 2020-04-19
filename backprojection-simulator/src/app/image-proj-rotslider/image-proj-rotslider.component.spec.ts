import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProjRotsliderComponent } from './image-proj-rotslider.component';

describe('ImageProjRotsliderComponent', () => {
  let component: ImageProjRotsliderComponent;
  let fixture: ComponentFixture<ImageProjRotsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageProjRotsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProjRotsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
