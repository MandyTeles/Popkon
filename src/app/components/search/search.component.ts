import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input()   searchTerm:string = '';
  @Output() searchChanged = new EventEmitter<string>();

  // Emitir o evento de pesquisa sempre que o valor mudar
  onSearchChange(): void {
    this.searchChanged.emit(this.searchTerm);
  }
}
