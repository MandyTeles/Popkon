import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ExibicaoComponent } from './components/exibicao/exibicao.component';
import { VideosComponent } from './components/videos/videos.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path:'exibicao/:id',component:ExibicaoComponent, canActivate:[authGuardFn]},
];
