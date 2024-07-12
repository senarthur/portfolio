import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('arrowLeft') arrowLeft!: ElementRef;
  @ViewChild('arrowRight') arrowRight!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  constructor() { }
  
  slideToRight() {
    this.container.nativeElement.style.left = '-1360px';
    this.arrowRight.nativeElement.style.visibility = 'hidden';
    this.arrowLeft.nativeElement.style.visibility = 'visible';
  }

  slideToLeft() {
    this.container.nativeElement.style.left = '0px';
    this.arrowLeft.nativeElement.style.visibility = 'hidden';
    this.arrowRight.nativeElement.style.visibility = 'visible';
  }
}
