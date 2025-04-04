import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  selectedHouse: string = 'None';
  characterId: string = '';

  onHouseSelected(house: string): void {
    this.selectedHouse = house;
  }

  onCharacterSelected(id: string): void {
    this.characterId = id;
  }
}
