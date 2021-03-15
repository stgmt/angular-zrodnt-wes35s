import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { Document } from '../../models/document';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = new Array<Document>();

  constructor(
      private docService: DocumentService,
   
    ) {}


  loadDocuments(){
    this.docService.getDocuments().subscribe(x=>{
      console.log(x);
      this.documents = x;
    });
  }

  ngOnInit() {
    
    
  }

}


