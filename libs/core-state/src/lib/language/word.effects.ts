import { Injectable } from "@angular/core";
import { LanguageService  } from "@language-app/core-data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as WordActions from './word.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Word } from "@language-app/api-interfaces";

@Injectable()
export class WordEffects {
  loadWord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WordActions.loadWord),
      fetch({
        run: (action) =>
          this.languageService
            .find(action.wordId)
            .pipe(
              map((word: Word) =>
                WordActions.loadWordSuccess({ word })
              )
            ),
        onError: (action, error) => WordActions.loadWordFailure({ error }),
      })
    )
  );

  loadWords$ = createEffect(() =>
  this.actions$.pipe(
    ofType(WordActions.loadWords),
    fetch({
      run: () =>
        this.languageService
          .all()
          .pipe(
            map((words: Word[]) => 
            WordActions.loadWordsSuccess({ words })
            )
          ),
        onError: (action, error) => WordActions.loadWordsFailure({ error })  
    })
  )
  );

  updateWord$ = createEffect(() => 
  this.actions$.pipe(
    ofType(WordActions.updateWord),
    pessimisticUpdate({
      run: (action) =>
        this.languageService
          .update(action.word)
          .pipe(
            map((word: Word) => 
            WordActions.updateWordSuccess({ word })
            )
          ),
        onError: (action, error) =>
            WordActions.updateWordFailure({ error }),
    })
  ));

  deleteWord$ = createEffect(() => 
  this.actions$.pipe(
    ofType(WordActions.deleteWord),
    pessimisticUpdate({
      run: (action) => 
       this.languageService
        .delete(action.word)
        .pipe(
          map(() => 
          WordActions.deleteWordSuccess({ word: action.word })
          )
        ),
       onError: (action, error) => 
       WordActions.deleteWordFailure({ error }) 
    })
  ));

  createWord$ = createEffect(() => 
  this.actions$.pipe(
    ofType(WordActions.createWord),
    pessimisticUpdate({
      run: (action) =>
       this.languageService
        .create(action.word)
        .pipe(
          map((word: Word) => 
           WordActions.createWordSuccess({ word })
          )
        ),
      onError: (action, error) =>
      WordActions.createWordFailure({ error }) 
    })
  ));

  constructor(
    private actions$: Actions,
    private languageService: LanguageService
  ) {}
}