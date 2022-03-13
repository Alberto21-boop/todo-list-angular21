import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
})
export class InputPropertyComponent implements OnInit {
  @Output() adicionar: EventEmitter<any> = new EventEmitter();

  item: Item = { text: '' };
  @Input() items: Item[];

  constructor() {}

  ngOnInit(): void {}

  addItem(text: any) {
    if (!this.item) {
      return;
    }
    this.adicionar.emit({ text });
  }

  editarTask() {}
}
