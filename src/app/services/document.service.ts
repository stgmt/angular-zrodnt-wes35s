import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Document } from "../models/document";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DocumentService {
  constructor(private httpClient: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>("/assets/documents.json", {
      observe: "body",
      responseType: "json"
    });
  }

  getDocument(id: number): Observable<Document> {
    return this.httpClient
      .get<Document[]>("/assets/documents.json", {
        observe: "body",
        responseType: "json"
      })
      .pipe(
        map((response: Document[]) => {
          console.log(response);
          console.log( response.find(c => c.id === id));
          let result = response.find(c => c.id === id);
          console.log(result);
          return result;
        })
      );
  }
}
