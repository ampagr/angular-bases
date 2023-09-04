import { Character } from './../../interfaces/character.interface';
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    @Input()
    public characterList: Character[] = [{
      name:'Trunks',
      power: 10
    }];

    @Output()
    public onDelete: EventEmitter<number> = new EventEmitter();

    public onDeleteCharacter(index: number): void {
      //TODO: Emitir el ID del Personaje

      this.onDelete.emit(index);
    }
}
