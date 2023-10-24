import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: String = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  getProducts(): Observable <any> {
    let api_path = this.url + 'products';
    return this.http.get<any>(api_path);
  }

  getProduct(id:any): Observable <any>{
    let api_path = this.url + 'products/getProduct/' + id;
    return this.http.get<any>(api_path);
  }

  getCategories(): Observable <any> {
    let api_path = this.url + 'categories';
    return this.http.get<any>(api_path);
  }

  postProduct(form:any): Observable<any> {
    let api_path = this.url + 'products/create';
    return this.http.post<any>(api_path, form);
  }

  putProduct(form:any): Observable<any> {
    let api_path = this.url + 'products/update';
    return this.http.put<any>(api_path, form);
  }

  deleteProduct(id: any): Observable<any> {
    let api_path = this.url + 'products/destroy/' + id;
    return this.http.delete<any>(api_path);
  }

  getEmployees(): Observable<any> {
    let api_path = this.url + 'employees';
    return this.http.get<any>(api_path);
  }

  createSale(form:any): Observable<any> {
    let api_path = this.url + 'sales/create';
    return this.http.post<any>(api_path, form);
  }
}
