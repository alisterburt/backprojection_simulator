import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageManipulationService {
  constructor(private http: HttpClient) {
  }

  private readonly rotateImageURL: string = "http://127.0.0.1:5000/api/rotate_image";

  rotateImage(theta: number): string {
    let options = theta ?
      {
        params: new HttpParams()
          .set('theta', String(theta))
      } :
      {};
    this.http.get(this.rotateImageURL, options).subscribe((res) => {
      console.log(res);
    })
    return 'hello';
  }

}
