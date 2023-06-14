import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {StorageService} from "../storage/storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = `${environment.url_api}`;

  constructor(protected readonly http: HttpClient, private readonly storageService: StorageService, private readonly router: Router) {
  }

  public getHelloUser(): Observable<string> {
    return this.http.get(`${this.BASE_URL}/user/hello`, {responseType: 'text'}).pipe(
      map((response: string) => {
          return response;
        }
      ));
  }

  public changeRole(email: string, role: string): Observable<void> {
    console.log("changeRole", email, role);
    return this.http.put<void>(`${this.BASE_URL}/auth/admin/modify`, null, {params: {email: email, role: role}});
  }

  public logout(): void {
    this.storageService.removeItem();
    this.router.navigate(['/login']);
  }
}
