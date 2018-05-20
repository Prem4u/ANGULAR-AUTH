import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
   private _registerUrl = 'http://localhost:3001/api/register';

  constructor(private _httpClient: HttpClient) { }

  registerUser(user) {
    return this._httpClient.post<any>(this._registerUrl, user);
  }
}
