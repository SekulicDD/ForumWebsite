import { Component, OnInit } from '@angular/core';
import { QuillModules } from 'ngx-quill';


@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})
export class CreatePostPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  quillConfig :QuillModules= {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['clean'],                                         // remove formatting button

        ['link', 'image',]   
      ]
    }
  }


}
