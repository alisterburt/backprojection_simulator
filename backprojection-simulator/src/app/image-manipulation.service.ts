import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageManipulationService {
  constructor(private http: HttpClient) { }
  private service: ImageManipulationService;
  private rotateImageURL: string;
  private options: HttpParams;

  rotateImage(theta : string): string {
    this.rotateImageURL = '127.0.0.1:5000/api/rotate_image';
    this.options = theta ?
      { params: new HttpParams().set('theta', theta) }: {};
    console.log(this.http.get(this.rotateImageURL, this.options));
    return 'hello';
  }

}
