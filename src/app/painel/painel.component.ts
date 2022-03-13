import { Component, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent {
  atualizado = new EventEmitter();
  indiceItem: number = 0;

  items: Item[] = [
  { text: 'item 1 ' },
  { text: 'item 2 ' },
  { text: 'item 3 ' },
  { text: 'item 4 ' },
];


  adicionar(item: Item) {
    this.items.push(item);
    //this.atualizado.emit(this.items);
  }

  remover(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  editarTarefa(item: any) {
    this.indiceItem = this.items.indexOf(item);
  }

  salvarTarefa(editado: any) {
    this.items[this.indiceItem].text = editado;
    //this.atualizado.emit(this.items);
  }
}
