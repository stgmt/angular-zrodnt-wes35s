import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = new Array<Document>();

  constructor(
      private docService: DocumentService,
      private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {      
       let id = params['id']; 
       if(id){
           this.docService.getDocument(id).subscribe(x=> this.documents.push(x))
       }
     
    });
    
  }

}


