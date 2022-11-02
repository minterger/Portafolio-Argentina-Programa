import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  token: string | null = '';
  menu: boolean = false;

  constructor(private router: Router, public loginService: LoginService) {}

  toggleMenu(): void {
    this.menu = !this.menu;
  }

  routeToHash(hash: string): void {
    this.router.navigateByUrl('#' + hash);
  }

  cerrarSesion() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
