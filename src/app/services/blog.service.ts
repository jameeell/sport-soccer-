import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
blogUrl:'api/blog';
  constructor(private httpClient:HttpClient) { }
  getAllBlogs(){
    return this.httpClient.get(this.blogUrl);
  }
  getBlogById(id:number){
    return this.httpClient.get(`${this.blogUrl}/${id}`);
    
  }
  addBlog(allBlogs:any){
    return this.httpClient.post(this.blogUrl,allBlogs);
  }
  deleteBlog(id:number){
    return this.httpClient.delete(`${this.blogUrl}/${id}`);
  }
  editBlog(allBlogs:any){
      return this.httpClient.put(`${this.blogUrl}/${allBlogs.id}`,allBlogs);
  }
}

