import { Component, OnInit, Output } from '@angular/core';

import { Item } from '../item.interface';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Output() tarefa;
  @Output() items: Item[] = [{ text: 'item 1' }, { text: 'item 2' }, { text: 'item 3' }, { text: 'item 4' }];

  removeTarefa(item: Item) {
    this.items.splice(this.items.indexOf(item), 1)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
