import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SafePipe } from '../../pipe/safe.pipe';
import { FormsModule } from '@angular/forms';
// import { Pipe,PipeTransform } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-exibicao',
  standalone: true,
  imports: [CommonModule,SafePipe],
  templateUrl: './exibicao.component.html',
  styleUrl: './exibicao.component.css'
})
export class ExibicaoComponent implements OnInit{
  @Input() videoId!:string;
  videoUrl!: string;
  videoDetails: any={};
  views: number= 0;
  @Output() backToHome= new EventEmitter<void>();

  constructor(private videoService:VideoService, private router: Router){}

  ngOnInit(){
    // this.videoId= this.videoService.getVideoId();
    this.videoUrl = `https://www.youtube.com/embed/${this.videoId}`;
    
    this.incrementViewCount();
    this.loadVideoDetails();
  }

  loadVideoDetails(): void {
    if (this.videoId) {
      this.videoService.getVideo(this.videoId).subscribe({
        next: (video) => {
          this.videoDetails = video; // Atribui os detalhes do vídeo
          console.log('Detalhes do vídeo:', video);
        },
        error: (err) => {
          console.error('Erro ao carregar detalhes do vídeo:', err);
        }
      });
    }
  }

  incrementViewCount():void {
    this.videoService.incrementView(this.videoId).subscribe( video => {
      this.views = video.views;
      });

  }


  goBack(){
    this.backToHome.emit();
  }
}
