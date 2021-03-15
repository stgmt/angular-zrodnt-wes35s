import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Document } from "../models/document";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DocumentService {
  constructor(private httpClient: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>("/assets/documents.json");
  }

  getDocument(id: number): Observable<Document> {
    return this.httpClient
      .get<Document[]>("/assets/documents.json")
      .pipe(
        map((response: Document[]) => {
          return response.filter(c => c.id == id)[0];
        })
      );
  }
}
