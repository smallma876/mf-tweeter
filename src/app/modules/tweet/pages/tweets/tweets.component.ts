import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetsComponent implements OnInit {
  tweetsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.tweetsForm = this.fb.group({
      content: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log('LoginComponent initialized');
  }

  onSubmit() {
    const formData = this.tweetsForm.value;
    this.http
      .post('http://localhost:3000/tweets/create', formData, {
        observe: 'response',
        withCredentials: true,
      })
      .subscribe(
        (response) => {
          const body = response.body as any;

          if (response.ok && body?.success) {
            console.log('Exitoso');
          } else {
            console.error('fallido');
          }
        },
        (error) => {
          // Manejo de error de red o servidor
          console.error('Error en la petición', error);
        }
      );
  }
}
