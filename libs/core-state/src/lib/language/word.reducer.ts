import { Word } from "@language-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action,createReducer, on } from "@ngrx/store";
import * as WordActions from './word.actions'

export const WORD_FEATURE_KEY = 'words';

export interface WordState extends EntityState<Word> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface WordPartialState {
  readonly [WORD_FEATURE_KEY]: WordState;
}

export const wordAdapter: EntityAdapter<Word> = createEntityAdapter<Word>();

export const initialWordState: WordState = wordAdapter.getInitialState(
  {
    loaded: false
  }
);

const onFailure = (state, { error }): WordState => ({ ...state, error })

const onDispatch = (state, action): WordState => ({
  ...state,
  loaded: false,
  error: null
});

const _wordReducer = createReducer(
  initialWordState,
  on(
    WordActions.loadWordFailure,
    WordActions.loadWordsFailure,
    WordActions.deleteWordFailure,
    WordActions.updateWordFailure,
    WordActions.createWordFailure,
    onFailure
  ),
  on(
    WordActions.loadWord,
    WordActions.loadWords,
    WordActions.deleteWord,
    WordActions.updateWord,
    WordActions.createWord,
    onDispatch
  ),
  on(
    WordActions.loadWordSuccess, (state, { word }) =>
    wordAdapter.upsertOne(word, {...state, loaded: true })
  ),
  on(WordActions.selectWord, (state, { wordId }) => ({
    ...state,
    selectedId: wordId,
  })
  ),
  on(WordActions.loadWordsSuccess, (state, {words}) => 
  wordAdapter.setAll(words, {...state, loaded: true })
  ),
  on(WordActions.deleteWordSuccess, (state, { word }) =>
  wordAdapter.removeOne(word.id, {...state, loaded: true })
  ),
  on(WordActions.updateWordSuccess, (state, { word }) => 
  wordAdapter.updateOne(
    { id: word.id, changes: word },
    { ...state, loaded: true }
  )
),

on(WordActions.createWordSuccess, (state, { word }) => 
wordAdapter.addOne(word, { ...state, loaded: true }))

);

export function wordReducer(
  state: WordState | undefined,
  action: Action
) {
  return _wordReducer(state, action);
}