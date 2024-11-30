import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthConfigService, AuthService } from '@auth0/auth0-angular';
import { MainPageComponent } from './components/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,CommonModule,AsyncPipe,MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'popkon';
  constructor(public auth: AuthService){}
}
