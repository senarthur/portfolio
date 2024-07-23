import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('progressBar') progressBar!: ElementRef;

  private height: number = 0;

  @HostListener('window:scroll') onWindowScroll() {
    this.height = window.document.documentElement.scrollHeight - window.document.documentElement.clientHeight;

    const scroll = window.document.documentElement.scrollTop;
    let progressRoll = (scroll / this.height) * 100;

    this.progressBar.nativeElement.style.width = `${progressRoll}%`
  }

  activeNavbar() {
    this.navbar.nativeElement.classList.add('active');
  }

  disableNavbar() {
    this.navbar.nativeElement.classList.remove('active');
  }
}
