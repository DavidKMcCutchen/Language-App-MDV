import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Word, emptyWord } from '@language-app/api-interfaces';
import { WordFacade } from "@language-app/core-state";
import { Observable } from 'rxjs';




@Component({
  selector: 'language-app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  allWords$: Observable<Word[]> = this.wordFacade.allWords$;
  selectedWord$: Observable<Word> = this.wordFacade.selectedWord$;

  form: FormGroup;
  

  constructor(
    private wordFacade: WordFacade,
    private formBuilder: FormBuilder
    ) {
      this.wordFacade.mutations$.subscribe((_) => this.resetWord());
    }

  ngOnInit() {
    this.initForm();
    this.wordFacade.loadWords();
    this.resetWord()
  }

  selectWord(word: Word) {
    this.form.patchValue(word);
    this.wordFacade.selectWord(word.id);
  }

  saveWord(word: Word) {
    this.wordFacade.saveWord(word);
  }

  deleteWord(word: Word) {
    this.wordFacade.deleteWord(word);
  }

  resetWord() {
    this.form.reset();
    this.selectWord(emptyWord)
  }

  cancel() {
    this.resetWord();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      english: [''],
      portuguese: ['']
    })
  }
}
