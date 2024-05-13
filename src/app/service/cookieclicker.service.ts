import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieclickerService {
  constructor() { }
  
  public readonly cookies = signal(0);

  public addCookie(): void {
    this.cookies.update(s => s +1);
  }
  
}
