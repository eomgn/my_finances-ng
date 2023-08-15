import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpBaseService {
  private readonly httpClient!: HttpClient;

  private apiBaseUrl = "http://localhost:3000/";

  constructor(protected readonly injector: Injector) {
    if (injector == null || injector === undefined) {
      throw new Error("Injector não pode ser nulo");
    }

    this.httpClient = injector.get(HttpClient);
  }

  protected httpGet(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}${endpoint}`);
  }

  protected httpPost(endpoint: string, payload: any): Observable<any> {
    return this.httpClient.post(`${this.apiBaseUrl}${endpoint}`, payload);
  }

  protected httpPut(endpoint: string, payload: any): Observable<any> {
    return this.httpClient.put(`${this.apiBaseUrl}${endpoint}`, payload);
  }

  protected httpDelete(endpoint: string): Observable<any> {
    return this.httpClient.delete(`${this.apiBaseUrl}${endpoint}`);
  }
}
