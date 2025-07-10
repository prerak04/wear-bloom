import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IRequestOptions {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get(url: string, headers?: any) {
    return this.http.get(url);
  }

  authGet(url: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
    });
    headers = headers.set('Accept', 'application/json');
    const options = { headers: headers };
    return this.http.get<any>(url, options);
  }

  post(url: string, data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const httpOptions = { headers: headers };
    let body = JSON.stringify(data);
    return this.http.post<any>(url, body, httpOptions);
  }

  authPost(url: string, data: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
    });
    const options = { headers: headers };
    return this.http.post<any>(url, data, options);
  }

  authPostForm(url: string, data: any) {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
    });
    const options = { headers: headers };
    return this.http.post<any>(url, data, options);
  }

  put(url: string, data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let body = JSON.stringify(data);
    return this.http.put<any>(url, body, options);
  }

  authPut(url: string, data: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
    });
    const options = { headers: headers };
    let body = JSON.stringify(data);
    return this.http.put<any>(url, body, options);
  }

  authPutForm(url: string, data: any) {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
    });
    const options = { headers: headers };
    return this.http.put<any>(url, data, options);
  }

  delete(url: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.delete<any>(url, options);
  }

  authDelete(url: string, data?: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
    });
    const options = { headers: headers, body: data };
    return this.http.delete<any>(url, options);
  }

  getWithCustomHeaders(
    url: string,
    options: {
      headers?: HttpHeaders;
      responseType?: 'json' | 'blob';
    }
  ): Observable<any> {
    return this.http.get(url, options as any);
  }
}
