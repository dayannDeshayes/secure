import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage-angular';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private token: string = `${environment.tokenKey}`;

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
    this._storage?.set(this.token, value);
  }

  public get(key: string): Promise<any> | undefined {
    return this._storage?.get(key);
  }

  public getToken(): string | undefined {
    return this.token;
  }

}
