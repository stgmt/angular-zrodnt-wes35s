import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Document } from '../models/document';

@Injectable({ providedIn: 'root' })
export class DocumentService {

  constructor(private httpClient: HttpClient) {

  }

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>('/assets/json/documents.json',  { observe: 'body' });
  }

  getDocument(id: number): Observable<Document> {

    let result: Document;
    this.httpClient.get<Document[]>('/assets/json/documents.json',  { observe: 'body' }).map()


    return of(result);
  }

}