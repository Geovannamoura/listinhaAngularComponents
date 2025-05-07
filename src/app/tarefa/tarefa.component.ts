import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../tarefa.model'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  // Aqui está o input que você precisa
  @Input() tarefa!: Tarefa;

  // Esses são os eventos emitidos para o componente pai
  @Output() remover = new EventEmitter<void>();
  @Output() alternar = new EventEmitter<void>();

  onRemover() {
    this.remover.emit();
  }

  onAlternar() {
    this.alternar.emit();
  }
}
