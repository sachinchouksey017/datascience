import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };

  postService(payload: any = null, apiendpoint: string = '', tokenRequired: boolean = false ) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.http.post(this.baseUrl + apiendpoint, payload, tokenRequired && this.httpOptions);
  }

  patchService(id, payload: any = null, apiendpoint: string = '', tokenRequired: boolean = false) {
    /* handles edit/patch operations
  params : id  : id of question or comment to edit,
          apiendpoint : endpoint i.e 'comments' , 'answers'
  id attached as url param.
  */
    return this.http.patch(this.baseUrl + apiendpoint + id + '/', payload, tokenRequired && this.httpOptions);
  }

  deleteService(id: number, apiendpoint: string = '', tokenRequired: boolean = false) {
    /* handles delete operations
  params : id  : id of question or comment to delete,
          apiendpoint : endpoint i.e 'comments' , 'answers'
  id attached as url param.
  */
    return this.http.delete(this.baseUrl + apiendpoint + id, tokenRequired ? this.httpOptions : null);
  }
  getService(apiendpoint: string = '', tokenRequired: boolean = false) {
    /* handles api calls for get request */
    return this.http.get(this.baseUrl + apiendpoint, tokenRequired && this.httpOptions);
  }

  optionsService(apiendpoint: any = '') {
    /* handles api calls for options request */
    return this.http.options(this.baseUrl + apiendpoint);
  }
}
