import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotsliderComponent } from './rotslider.component';

describe('RotsliderComponent', () => {
  let component: RotsliderComponent;
  let fixture: ComponentFixture<RotsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
