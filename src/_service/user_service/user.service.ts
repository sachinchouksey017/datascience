import { Injectable } from '@angular/core';
import { HttpService } from '../http_service/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }
  submitDatasets(payload: any = null) {
    return this.http.postService(payload, 'submit_datasets');
  }
  loginCommon(payload: any = null) {
    return this.http.postService(payload, 'login');
  }
}
