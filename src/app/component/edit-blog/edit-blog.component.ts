import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
id:any;
blog:any;
editBlogForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private blogService:BlogService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.editBlogForm = this.formBuilder.group({
      name: [''],
      images: [''],
      lastTeam: [''],
      salary: ['']
  });
  this.blogService.getBlogById(this.id).subscribe(
    data=>{
      this.blog=data;
    }
  )
}
editBlog() {
  console.log('this is the match add', this.blog);
  this.blogService.editBlog(this.blog).subscribe(
    () => {
      console.log('blog changed');
      this.router.navigate(['admin']);
    }
  )
}
}
