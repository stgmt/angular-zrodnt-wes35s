import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DocumentService } from "../../services/document.service";

import { Document } from "../../models/document";

@Component({
  selector: "app-document-data",
  templateUrl: "./document-data.component.html",
  styleUrls: ["./document-data.component.css"]
})
export class DocumentDataComponent implements OnInit {
  document: Document;

  constructor(
    private route: ActivatedRoute,
    private docService: DocumentService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    
    if (id) {
      this.docService.getDocument(id).subscribe(x => (this.document = x));
    }
  }

  goBack(): void {
    window.location.href = "/";
  }
}
