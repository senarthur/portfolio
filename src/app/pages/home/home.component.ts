import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  contactForm!: FormGroup;
  message: string = 'Enviar';
  sending: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      from_name: ['', Validators.required],
      from_email: ['', Validators.compose([Validators.required, Validators.email])],
      reply_to: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(e: Event) {
    if(!this.contactForm.valid) return;

    this.sending = true;

    emailjs.init('cBOK5Rwu5DWn42Tq1');
    emailjs.send('service_z23jxcd', 'template_u05y8rq', {
      from_name: this.contactForm.value.from_name,
      from_email: this.contactForm.value.from_email,
      reply_to: this.contactForm.value.reply_to,
      message: this.contactForm.value.message,
    }).then(() => {
        this.message = "Enviado";
        setTimeout(() => {
          this.message = "Enviar";
        },1000);
    }) .catch(() => {
        this.message = "Erro";
        setTimeout(() => {
          this.message = "Enviar";
        },1000);
    }) .finally(() => {
      this.sending = false;
      this.contactForm.reset();
    })
  }
}