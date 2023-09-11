import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('LoginComponent initialized');
  }

  onRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  onSubmit() {
    const formData = this.loginForm.value;
    this.http
      .post('http://localhost:3000/login', formData, {
        observe: 'response',
        withCredentials: true,
      })
      .subscribe(
        (response) => {
          const body = response.body as any;

          if (response.ok && body?.success) {
            // Aquí asumimos que el servidor envía un cookie con el token
            // y el navegador lo manejará automáticamente en futuras peticiones
            // Redirigir al usuario al dashboard
            this.router.navigate(['/tweet/tweets']);
          } else {
            // Manejo de error de login (opcional)
            console.error('Login fallido');
          }
        },
        (error) => {
          // Manejo de error de red o servidor
          console.error('Error en la petición', error);
        }
      );
  }
}
