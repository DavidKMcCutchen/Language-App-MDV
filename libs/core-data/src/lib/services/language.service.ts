import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from "@language-app/api-interfaces";

export const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  model = 'words';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Word[]>(this.getUrl());
  }
  find(wordId: string) {
    return this.httpClient.get<Word>(this.getUrlById(wordId));
  }
  create(words: Word) {
    return this.httpClient.post<Word>(this.getUrl(), words);
  }
  update(words: Word) {
    return this.httpClient.patch<Word>(this.getUrlById(words.id), words);
  }
  delete({ id }: Word) {
    return this.httpClient.delete<Word>(this.getUrlById(id));
  }
  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
