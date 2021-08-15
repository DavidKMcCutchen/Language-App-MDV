import { ActionReducerMap } from '@ngrx/store';

import * as fromWords from './language/word.reducer'

export interface AppState {
  [fromWords.WORD_FEATURE_KEY]: fromWords.WordState
} 

export const reducers: ActionReducerMap<AppState> = {
  [fromWords.WORD_FEATURE_KEY]: fromWords.wordReducer
};