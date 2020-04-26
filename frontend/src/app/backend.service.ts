import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly publicUrl: string = "http://localhost:5000/"

  public getBackendUrl(url): string {
    return this.publicUrl + url;
  }

  public getStatsPublicUrl(resource: string): string {
    return this.publicUrl + resource;
  }
}
