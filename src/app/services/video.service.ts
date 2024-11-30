import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/videos';
  constructor(private http: HttpClient) {}

  getVideo(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  incrementView(id: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?id=${id}`).pipe(switchMap(videos => {
        const video = videos[0];
        video.views += 1;
        return this.http.put<any>(`${this.apiUrl}/${video.id}`, video)}));
  }
  
  getVideos(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  searchVideos(term:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}?q=${term}`);
  }

  private videoId: string = ''; // Variável para armazenar o ID do vídeo

  setVideoId(id: string): void {
    this.videoId = id; // Define o ID do vídeo
  }

  getVideoId(): string {
    return this.videoId; // Retorna o ID do vídeo armazenado
  }

}
