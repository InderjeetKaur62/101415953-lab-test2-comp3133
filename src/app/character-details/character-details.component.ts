import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() characterId: string = '';
  character: Character | undefined;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.characterId) {
      this.characterService.getCharacterById(this.characterId).subscribe(data => {
        this.character = data;
      });
    }
  }
}

