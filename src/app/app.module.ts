import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterService } from './services/character.service'

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterFilterComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
