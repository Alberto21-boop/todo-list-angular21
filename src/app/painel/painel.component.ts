import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  public tarefa;
  public items: Item[] = [{text: 'item 1'}, {text: 'item 2'}, {text: 'item 3'}, {text: 'item 4'}];
  addTarefa(){
    if(!this.tarefa){
      return
    }
    this.items.push(this.tarefa);
  }
  removeTarefa(item: Item){
    this.items.splice( this.items.indexOf(item), 1 );
  }
  constructor() { }

  ngOnInit(): void {
  }

}
