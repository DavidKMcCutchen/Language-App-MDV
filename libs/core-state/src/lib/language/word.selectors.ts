import { emptyWord } from "@language-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { wordAdapter, WordState, WORD_FEATURE_KEY } from "./word.reducer";

export const getWordState = createFeatureSelector<WordState>(WORD_FEATURE_KEY);

const { selectAll, selectEntities } = wordAdapter.getSelectors();

export const getWordsLoaded = createSelector(
  getWordState,
  (state: WordState) => state.loaded
)

export const getWordError = createSelector(
  getWordState,
  (state: WordState) => state.error
)

export const getAllWords = createSelector(
  getWordState,
  (state: WordState) => selectAll(state)
)

export const getWordsEntities = createSelector(
  getWordState,
  (state: WordState) => selectEntities(state)
)

export const getSelectedWordsId = createSelector(
  getWordState,
  (state: WordState) => state.selectedId
)

export const getSelectedWord = createSelector(
  getWordsEntities,
  getSelectedWordsId,
  (entities, selectedId) => entities[selectedId] || emptyWord

)