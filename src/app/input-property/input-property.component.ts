import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';


@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {
  
  @Output() adicionar: EventEmitter<any>= new EventEmitter()
  
  tarefa;
  //item: Item = {text: ''};
  @Input() items: Item[] = [{text: 'item 1'}, {text: 'item 2'}, {text: 'item 3'}, {text: 'item 4'}];
  
    
  constructor() { }

  ngOnInit(): void {
  }

  remover(tipo: string){
    
  }
  addItem(text: string){
    if(!this.tarefa){
      return
    }
    this.adicionar.emit(this.items.push({text}))
        
  }

}
