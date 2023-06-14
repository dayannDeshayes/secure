import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage-angular';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private token_session: string = ``;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (this._storage !== null) {
      return;
    }
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(value: any) {
    this.token_session = value;
    this._storage?.set(`${environment.tokenKey}`, value);
  }

  public get(): Promise<any> | undefined {
    return this._storage?.get(`${environment.tokenKey}`);
  }

  public getToken(): string | undefined {
    return this.token_session;
  }

  public removeItem(): void {
    this._storage?.remove(`${environment.tokenKey}`);
  }

}
