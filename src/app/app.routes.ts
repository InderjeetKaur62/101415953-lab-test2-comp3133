import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';  // Import your components
import { CharacterDetailsComponent } from './character-details/character-details.component';  // Import the details component
import { CharacterFilterComponent } from './character-filter/character-filter.component';  // If you have a filter component

export const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },  // Default route redirect to character list
  { path: 'characters', component: CharacterListComponent },  // Route for the character list
  { path: 'characters/:id', component: CharacterDetailsComponent },  // Route for character details (using a dynamic id)
  { path: 'filter', component: CharacterFilterComponent },  // Optional filter route
  { path: '**', redirectTo: '/characters' }  // Wildcard route for invalid paths (redirects to the character list)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

