import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '@auth0/auth0-angular';
import { ExibicaoComponent } from '../exibicao/exibicao.component';
import { VideosComponent } from '../videos/videos.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,VideosComponent,SearchComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(public auth: AuthService){}

}
