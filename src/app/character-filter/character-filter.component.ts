import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css']
})
export class CharacterFilterComponent {

  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'None'];
  selectedHouse: string = 'None';

  @Output() houseSelected = new EventEmitter<string>();

  constructor(private characterService: CharacterService) { }

  onHouseChange(): void {
    this.houseSelected.emit(this.selectedHouse);
  }
}

