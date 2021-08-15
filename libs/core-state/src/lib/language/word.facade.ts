import { Injectable } from "@angular/core";
import { Word } from "@language-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import * as WordActions from './word.actions';
import * as fromWords from './word.reducer';
import * as WordSelectors from './word.selectors'

@Injectable({
  providedIn: 'root',
})

export class WordFacade {
  allWords$ = this.store.pipe(select(WordSelectors.getAllWords));
  selectedWord$ = this.store.pipe(select(WordSelectors.getSelectedWord));
  loaded$ = this.store.pipe(select(WordSelectors.getWordsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) => 
    action.type === WordActions.createWord({} as any).type ||
    action.type === WordActions.deleteWord({} as any).type ||
    action.type === WordActions.updateWord({} as any).type 
    )
  );

  selectWord(wordId: string) {
    this.dispatch(WordActions.selectWord({ wordId }));
  };

  loadWords() {
    this.dispatch(WordActions.loadWords());
  };

  loadWord(wordId: string) {
    this.dispatch(WordActions.loadWord({ wordId }));
  };
  saveWord(word: Word) {
    word.id ? this.updateWord(word) : this.createWord(word);
  }
  createWord(word: Word) {
    this.dispatch(WordActions.createWord({ word }));
  };

  updateWord(word: Word) {
    this.dispatch(WordActions.updateWord({ word }));
  };

  deleteWord(word: Word) {
    this.dispatch(WordActions.deleteWord({ word }));
  };
  dispatch(action: Action) {
    this.store.dispatch(action)
  }

  constructor(
    private store: Store<fromWords.WordPartialState>,
    private actions$: ActionsSubject
  ) {}
}