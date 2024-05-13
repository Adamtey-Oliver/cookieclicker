import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieclickerService } from '../service/cookieclicker.service';
@Component({
  selector: 'app-cookieclicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookieclicker.component.html',
  styleUrl: './cookieclicker.component.css'
})
export class CookieclickerComponent {
  
  private readonly cookieClickerService = inject(CookieClickerService);

  public readonly cookies = this.cookieClickerService.cookies;

  public onAddCookie(): void {
    this.cookieClickerService.addCookie();
  }

}
