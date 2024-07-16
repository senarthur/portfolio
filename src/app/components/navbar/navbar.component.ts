import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('navbar') navbar!: ElementRef;

  activeNavbar() {
    this.navbar.nativeElement.classList.add('active');
  }

  disableNavbar() {
    this.navbar.nativeElement.classList.remove('active');
  }
}
