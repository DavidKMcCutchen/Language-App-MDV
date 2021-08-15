import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from '@language-app/api-interfaces';

@Component({
  selector: 'language-app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent {
    @Input() words: Word[];
    @Input() readonly = false;
    @Output() selected = new EventEmitter();
    @Output() create = new EventEmitter();
    @Output() deleted = new EventEmitter();
  }
