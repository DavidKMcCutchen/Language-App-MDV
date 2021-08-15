import { Word } from "@language-app/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity

export const selectWord = createAction(
  '[WORDS] Select Word',
  props<{ wordId: string }>()
);

// Load All Entities

export const loadWords = createAction(
  '[WORDS] Load Words'
);

export const loadWordsSuccess = createAction(
  '[WORDS] Load Words Success',
  props<{ words: Word[]}>()
);

export const loadWordsFailure = createAction(
  '[WORDS] Load Words Failure',
  props<{ error: any }>()
);

// Load Single Entity

export const loadWord = createAction(
  '[WORDS] Load Word',
  props<{ wordId: string }>()
);

export const loadWordSuccess = createAction(
  '[WORDS] Load Word Success',
  props<{ word: Word}>()
);

export const loadWordFailure = createAction(
  '[WORDS] Load Word Failure',
  props<{ error: any }>()
);

// Load Update Entity

export const updateWord = createAction(
  '[WORDS] Update Word',
  props<{ word: Word }>()
);

export const updateWordSuccess = createAction(
  '[WORDS] Update Word Success',
  props<{ word: Word }>()
);

export const updateWordFailure = createAction(
  '[WORDS] Update Word Failure',
  props<{ error: any }>()
);

// Load Delete Entity

export const deleteWord = createAction(
  '[WORDS] Delete Word',
  props<{ word: Word}>()
);

export const deleteWordSuccess = createAction(
  '[WORDS] Delete Word Success',
  props<{ word: Word }>()
);

export const deleteWordFailure = createAction(
  '[WORDS] Delete Word Failure',
  props<{ error: any }>()
);

// Load Create Entity

export const createWord = createAction(
  '[WORDS] Create Word]',
  props<{ word: Word }>()
);

export const createWordSuccess = createAction(
  '[WORDS] Create Word Success',
  props<{ word: Word }>()
);

export const createWordFailure = createAction(
  '[WORDS] Create Word Failure',
  props<{ error: any }>()
);