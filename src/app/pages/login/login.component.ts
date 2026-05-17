import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  senha = '';
  mensagemErro = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@lojamusica.com' && this.senha === 'admin123') {
      this.router.navigate(['/produtos']);
    } else {
      this.mensagemErro = 'E-mail ou senha incorretos.';
    }
  }
}
