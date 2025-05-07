import { Component } from '@angular/core';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TarefaComponent, FooterComponent, ListaTarefasComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-tarefas';
}
