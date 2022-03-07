import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.interface';


@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {
  item: Item = {text: ''};
  @Input() items: Item[] = [{text: 'item 1'}, {text: 'item 2'}, {text: 'item 3'}, {text: 'item 4'}];
    
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    if(!this.item){
      return
    }
    console.log(this.item);
    this.items.push(this.item);
    console.log(this.items);
  }

}
