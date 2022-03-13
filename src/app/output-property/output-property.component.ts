import { Component, Output, EventEmitter, Input } from '@angular/core';
import { __importDefault } from 'tslib';

import { Item } from '../item.interface';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent {
  isEditing: boolean = false;
  atualizado = new EventEmitter();
  salvo = new EventEmitter();
  tarefaEditada: string = '';

  @Output() remover = new EventEmitter();

  @Input() items: Item[];

  @Output() update = new EventEmitter<object>();

  removeTarefa(item: Item) {
    this.remover.emit(item);
  }

  completeItem() {
    this.update.emit({
      item: this.items,
    });
  }

  editarTarefa(item: Item) {
    this.isEditing = !this.isEditing;
    this.atualizado.emit(item);
  }

  salvarTarefa(editado: string) {
    this.isEditing = !this.isEditing;
    this.tarefaEditada = editado;
    console.log(editado);
    this.salvo.emit(editado);
  }
}
