import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Word } from '@language-app/api-interfaces';

@Component({
  selector: 'language-app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent {
  currentWord: Word;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set word(value) {
    if (value) this.originalTitle = value.english;
    this.currentWord = { ...value }
  }
  @Input() form: FormGroup;

  save(formDirective: NgForm) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
  
