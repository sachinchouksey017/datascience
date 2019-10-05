import { Injectable } from '@angular/core';
import { HttpService } from '../http_service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }
  getUserDetails() {
    return this.http.getService('admin_panel');
  }
  getUserDatasets(id) {
    return this.http.getService('datasets/' + id);
  }
  approveRejectDataset(endPointUrl) {
    return this.http.postService({}, 'approved_datasets');
  }
}
