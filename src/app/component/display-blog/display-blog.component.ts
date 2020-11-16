import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
id:any;
blog:any;
  constructor(private activateRoute:ActivatedRoute,
    private blogService:BlogService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.blogService.getBlogById(this.id).subscribe(
      (data) =>{
        console.log('data',data);
        this.blog= data;
      }
    )
  }

}
