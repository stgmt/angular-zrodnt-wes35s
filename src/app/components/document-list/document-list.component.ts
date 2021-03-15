import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../services/document.service";
import { Document } from "../../models/document";
@Component({
  selector: "app-document-list",
  templateUrl: "./document-list.component.html",
  styleUrls: ["./document-list.component.css"]
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = new Array<Document>();
  sorted: boolean = false;
  constructor(private docService: DocumentService) {}

  getDocumentLink(doc: Document) {
    return "/document/" + doc.id;
  }

  sort() {
    if (!this.sorted) {
      this.sorted = true;
      this.documents.sort(function(a, b) {
        console.log(new Date(a.createdate).getTime());

        return (
          new Date(a.createdate).getTime() - new Date(b.createdate).getTime()
        );
      });
      return;
    }

    this.sorted = false;

    this.documents.sort(function(a, b) {
      console.log(new Date(a.createdate).getTime());

      return (
        new Date(b.createdate).getTime() - new Date(a.createdate).getTime()
      );
    });
  }

  loadDocuments() {
    this.docService.getDocuments().subscribe(x => {
      console.log(x);
      this.documents = x;
    });
  }

  ngOnInit() {}
}
