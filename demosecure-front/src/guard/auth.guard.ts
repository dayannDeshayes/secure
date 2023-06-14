import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from "../app/services/storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private storage: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storage.get()) {
      console.log("guard", this.storage.get());
      return true;
    }
    console.log("guard", this.storage.get());
    this.route.navigate(['/login']);
    return false;
  }
}
