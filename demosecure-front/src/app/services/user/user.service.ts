import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = `${environment.url_api}/user`;

  constructor(protected readonly http: HttpClient) {
  }

  public getHelloUser(): Observable<string> {
    return this.http.get(`${this.BASE_URL}/hello`, {responseType: 'text'}).pipe(
      map((response: string) => {
          return response;
        }
      ));
  }
}
