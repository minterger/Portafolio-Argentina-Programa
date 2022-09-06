import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu:boolean = false;

  constructor(private router:Router) { 
  }

  toggleMenu():void {
    this.menu = !this.menu;
  }

  routeToHash(hash:string):void {
    this.router.navigateByUrl('#' + hash)
  }
  
  ngOnInit(): void {
  }
  
}
