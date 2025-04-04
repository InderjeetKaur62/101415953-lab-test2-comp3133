import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
