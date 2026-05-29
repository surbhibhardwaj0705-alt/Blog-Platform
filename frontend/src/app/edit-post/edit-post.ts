import { Component } from '@angular/core';
import { Post } from '../services/post';
import { ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  imports: [FormsModule],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css',
})
export class EditPost {

  postData: any = ''; 
  postId!: string;
  
  
  constructor(private postService: Post, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    this.postId = this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(this.postId).subscribe((data)=>{
      this.postData =data;
    });

  }
  updatePost(){
    this.postService.editPost(this.postId, this.postData).subscribe(()=>{
      alert('Post updated successfully');
      // Optionally, navigate back to the post list or the updated post
       this.router.navigate(['/']);
       
    }, (error)=>{
      console.error('Error updating post', error);
    });
  }
}
