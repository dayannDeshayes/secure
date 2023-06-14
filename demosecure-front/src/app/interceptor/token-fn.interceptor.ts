import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {StorageService} from "../services/storage/storage.service";

export const tokenFnInterceptor: HttpInterceptorFn = (req, next) => {
  //Recupere le StorageService
  const storageService = inject(StorageService);
  //recuperation du token dans le stockage local
  const token = storageService.getToken();
  //headers de la requete
  let newHeaders = req.headers;
  if (token) {
    //si on a un token, on l'injecte dans le header Authorization
    console.log("interceptor", token);
    newHeaders = newHeaders.append('Authorization', `Bearer ${token}`);
    console.log("interceptor headers", newHeaders);
  }
  // Enfin, nous devons cloner notre requete avec nos nouveaux en-tetes.
  // Ceci est necessaire car les HttpRequests sont immuables.
  const authReq = req.clone({headers: newHeaders});
  // Nous renvoyons ensuite un Observable qui executera la requete
  // ou la passera à l'intercepteur suivant s'il y en a un
  return next(authReq);
};
