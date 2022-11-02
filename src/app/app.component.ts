import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portafolio-Argentina-Programa';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getToken();
  }
}
