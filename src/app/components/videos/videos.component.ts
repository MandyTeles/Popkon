import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ExibicaoComponent } from '../exibicao/exibicao.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { VideoService } from '../../services/video.service';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ExibicaoComponent,SearchComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit{
  videos: any[] = [];
  filteredVideos: any[] = []; 
  searchTerm:string = '';
  
  constructor(public auth:AuthService,private router: Router,private videoService:VideoService){}

  ngOnInit(): void {
    this.loadVideos(); 
  }

  loadVideos(): void {
    this.videoService.getVideos().subscribe(
      (data) => {
        console.log('Dados recebidos:', data); 
        this.videos = data;
        this.filteredVideos = data; 
      },
      (error) => {
        console.error('Erro ao carregar vídeos:', error);
      }
    );
  }

  onSearch(term: string): void {
    this.filteredVideos = this.videos.filter((video) =>
      video.titulo.toLowerCase().includes(term.toLowerCase())
    );
    console.log('Vídeos filtrados:', this.filteredVideos);
    console.log('Termo pesquisado:', term);
  }



  navigateToexibicao(){
    this.router.navigate(['/exibicao']);
  }
  showVideo= false;
  currentVideo:string= '';
  
  showVideoContent(videoId:string): void{
    console.log('ID do vídeo selecionado:', videoId)
    this.currentVideo = videoId
    this.showVideo = true;
  }
}
