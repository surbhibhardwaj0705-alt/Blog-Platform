import { Component } from '@angular/core';
import { Post } from '../../services/post';
import {NgFor} from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import  { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-post-list',
  imports: [NgFor, CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {

  posts: any[]= [];
  currentPage = 1;
  itemsPerPage = 5;
  allPosts: any[] = [];
  isLoggedIn = false;

  constructor(private postService: Post, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(){
    this.postService.getPosts().subscribe((data:any)=>{
   // console.log(data);
      this.posts = data;
      this.allPosts = data;
      this.cdr.detectChanges();
     setTimeout(() => {

    this.isLoggedIn =
      !!localStorage.getItem('token');

  });
    });
  }
  ngAfterViewInit() {

  this.isLoggedIn =
    !!localStorage.getItem('token');

  this.cdr.detectChanges();

}
  get paginatedPosts() {

  const start =

    (this.currentPage - 1)

    * this.itemsPerPage;

  return this.posts.slice(

    start,

    start + this.itemsPerPage

  );

}
filterCategory(event: any): void {

  const category = event.target.value;

  if(category === '') {

    this.posts = this.allPosts;

  } else {

    this.posts = this.allPosts.filter(

      (post: any) =>

      post.category === category

    );

  }

}
editPost(id: number){
  this.router.navigate(['/edit-post', id]);

}
deletePost(id: string){
  const confirmDelete = confirm( 'Are you sure you want to delete this post?');
   console.log(id);
  if(confirmDelete){
    this.postService.deletePost(id).subscribe(()=>{
      this.postService.getPosts()
        .subscribe((data: any) => {

          this.posts = data;
          this.allPosts = data;
         this.cdr.detectChanges();

        });
    })
    
  }
}
getPosts() {

  this.postService.getPosts()
    .subscribe((res: any) => {
      const token = localStorage.getItem('token');
      this.isLoggedIn = !!token;

      this.posts = res;
      this.allPosts = res;
    });

}

}
