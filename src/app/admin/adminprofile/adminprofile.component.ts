import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
 
  title:any='Admin Profile';
  Adminpro:any;
  error: string;

  imagepath:any='./assets/images/team2.jpg';

  username:any;
  password:any;

  constructor(private blog:BlogService) { }

  ngOnInit() {
    
    this.blog.getAdminprofile().subscribe(
      (data) => 
       {
         this.username = data[0].username;
         this.password = data[0].password;
         
         error => this.error = error
      } 
    );

  }

}
