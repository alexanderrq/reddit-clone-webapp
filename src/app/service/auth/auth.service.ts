import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpRequestPayload } from '../../model/signup-request.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(signUpRequestPayload: SignUpRequestPayload): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/auth/signup',
      signUpRequestPayload
    );
  }
}
