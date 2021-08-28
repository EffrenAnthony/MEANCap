import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logedStatus = new BehaviorSubject<string | null>(null)
  loged$ = this.logedStatus.asObservable()
  constructor() { }

  isLoged():any{
    let token = window.localStorage.getItem('token');
    this.logedStatus.next(token)
    return this.loged$
  }
}
