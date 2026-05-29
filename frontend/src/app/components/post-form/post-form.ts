import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import {Post} from '../../services/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  imports: [ FormsModule,
    NgxEditorModule,
    CommonModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostForm implements OnInit, OnDestroy {

editor! : Editor;
postData= {
   title: '',
    category: '',
    content: ''
}
constructor(private post: Post, private router: Router){}

  ngOnInit(): void {
    this.editor =new Editor();
  }

  ngOnDestroy(): void {
  }
  createPost(): void{
    
    this.post.createPost(this.postData).subscribe({next: (response) =>{
      console.log(response);
      alert("Post Created Successfully");
    //  localStorage.setItem('token', response.token);
       this.router.navigate(['/']);
      
      this.postData ={
        title: '',

          category: '',

          content: ''
      }
    },
  error: (error)=>{
    console.log(error);
      alert('Error Creating Post');
  }});
  }
   
}
