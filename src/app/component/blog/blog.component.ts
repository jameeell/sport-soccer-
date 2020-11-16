import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  allBlogs:any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService. getAllBlogs().subscribe(
      data =>{
        this.allBlogs =data;
      }
    )
  }

}
