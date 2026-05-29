import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Post {
 
  constructor(private http: HttpClient) {}
  apiURL= "http://localhost:5000/api";


  getPosts(){
    return this.http.get(this.apiURL+"/posts");
  }
createPost(postData: any){
  const token= localStorage.getItem('token');
  const headers = new HttpHeaders({
     Authorization: `Bearer ${token}`
  });

  return this.http.post(this.apiURL+"/posts",postData , {headers})
}

deletePost(id: string) {
  return this.http.delete(`${this.apiURL}/posts/${id}`
  );
}
getPostById(id: string) {

  return this.http.get(
    `${this.apiURL}/posts/${id}`
  );

}
editPost(id: string,postData: any){
  return this.http.put(`${this.apiURL}/posts/${id}`, postData);
}
}
