import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class ImageManipulationService {
  constructor(private http: HttpClient, private backendService: BackendService) {
  }

  private readonly rotateImageURL: string = "api/rotate_image";

  rotateImage(theta: number): string {
    let options = theta ?
      {
        params: new HttpParams()
          .set('theta', String(theta))
      } :
      {};
    this.http.get(this.backendService.getBackendUrl(this.rotateImageURL), options).subscribe((res) => {
      console.log(res);
    })
    return 'hello';
  }

}
