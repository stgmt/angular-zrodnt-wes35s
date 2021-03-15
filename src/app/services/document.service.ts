import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Document } from '../models/document';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DocumentService {

  constructor(private httpClient: HttpClient) {

  }

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>('/assets/json/documents.json',  { observe: 'body' });
  }

  getDocument(id: number): Observable<Document> {
    
    return this.httpClient.get<Document[]>('/assets/json/documents.json',  { observe: 'body' })
    .pipe(
    map( response => {
     
     let result: Document = response.find(c=>c.id === id);
     return result;
   }));
    
  }

}