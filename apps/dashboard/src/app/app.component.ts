import { Component } from '@angular/core';

@Component({
  selector: 'language-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Flashcards';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'words', icon: 'view_list', title: 'Flashcards'}
  ]
};