import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Item } from '../item.interface';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {
  
  editable: boolean = false;

  @Output() remover: EventEmitter<any> = new EventEmitter()

  @Output() tarefa;
  @Input() items: Item[] = [{ text: 'item 1 ' }, { text: 'item 2 ' }, { text: 'item 3 ' }, { text: 'item 4 ' }];
  
  @Output() update = new EventEmitter<object>();

  
 
  removeTarefa(item: Item) {
  this.remover.emit( this.items.splice(this.items.indexOf(item), 1))    

  }

  completeItem() {

    this.update.emit({

      item: this.items,

    });

    

  }

  isEditing() {

    this.editable = !this.editable;

  }

  constructor() { }

  ngOnInit(): void {
  }


}
