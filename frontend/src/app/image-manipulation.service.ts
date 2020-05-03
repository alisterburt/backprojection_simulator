import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class ImageManipulationService {

  constructor(private http: HttpClient, private backendService: BackendService) { }

  private readonly rotateImageURL: string = "api/rotate_image";
  private readonly getProjectionURL: string = "api/get_projection";


  rotateImage(theta: number): string {
    let options = theta ?
      {
        params: new HttpParams()
          .set('theta', String(theta))
      } :
      {};
    this.http.get(this.backendService.getBackendUrl(this.rotateImageURL), options).subscribe((projection) => {
      console.log('projection data received');
      return projection;
    });
    return 'ok';
  }

  getProjection(theta: number): string {
    let options = theta ?
      {
        params: new HttpParams()
          .set('theta', String(theta))
      } :
      {};
    this.http.get(this.backendService.getBackendUrl(this.getProjectionURL), options).subscribe((res) => {
      console.log(res);
    })
    return 'ok';
  }

}
