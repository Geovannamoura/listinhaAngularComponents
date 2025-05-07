import { Component } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from '../tarefa/tarefa.component';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, TarefaComponent], 
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  novaTarefa: string = '';
  tarefas: Tarefa[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ titulo: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

  alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
