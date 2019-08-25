import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseUrl = 'https://5d529be23432e70014e6bb42.mockapi.io/test';
  baseUrl = 'http://127.0.0.1:8000/datasets/';
  constructor(private http: HttpClient) { }


  postService(payload: any = null, apiendpoint: string = '') {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.http.post(this.baseUrl + apiendpoint, payload);
  }

  patchService(id, payload: any = null, apiendpoint: string = '') {
    /* handles edit/patch operations
  params : id  : id of question or comment to edit,
          apiendpoint : endpoint i.e 'comments' , 'answers'
  id attached as url param.
  */
    return this.http.patch(this.baseUrl + apiendpoint + id + '/', payload);
  }

  deleteService(id: number, apiendpoint: string = '') {
    /* handles delete operations
  params : id  : id of question or comment to delete,
          apiendpoint : endpoint i.e 'comments' , 'answers'
  id attached as url param.
  */
    return this.http.delete(this.baseUrl + apiendpoint + id);
  }
  getService(author_email: string= '', apiendpoint: string = '') {
    /* handles api calls for get request */
    const email = { email: author_email };
    return this.http.get(this.baseUrl + apiendpoint, { params: email });
  }

  optionsService(apiendpoint: any = '') {
    /* handles api calls for options request */
    return this.http.options(this.baseUrl + apiendpoint);
  }
}
