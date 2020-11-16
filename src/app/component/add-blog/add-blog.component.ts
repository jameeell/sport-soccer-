import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  addBlogForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addBlogForm = this.formBuilder.group({
      info1: [''],
      info2: [''],
      info3: [''],
      info4: ['']   
    })
  }

  addBlog(blog:any) {
    console.log('This is a blog', blog);
    alert('Btn clicked');
  }
}
