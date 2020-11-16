import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { MatchService } from 'src/app/services/match.service';
import { PlayerGamesService } from 'src/app/services/player-games.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allPlayers: any;
  allMatches: any;
  allUsers: any;
  blogs:any;
  constructor(private matchService: MatchService,
    private playerService: PlayerGamesService,
    private userService: UserService,
    private blogService:BlogService,
    private router: Router) { }

  ngOnInit(): void {

    this.getMatches();
    this.getPlayer();
    this.getAllUser();
    this.getAllBlog();
  }
  getAllBlog(){
    this.blogService.getAllBlogs().subscribe(
      data=>{
        this.blogs= data;
        console.log('done');
        
      }
    );
  }
  getAllUser() {
    this.userService.getAllUser().subscribe(
      data => {
        this.allUsers = data;
        
      }
    )
  }
  getPlayer() {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.allPlayers = data;
      }
    )
  }
  getMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.allMatches = data;
      }
    )
  }
  displayPlayers(id: number) {
    this.router.navigate([`display-player/${id}`]);
  }

  //fun avec deux methode p:number mais def vc alert et on function
  editPlayers(id: number) {
    this.router.navigate([`edit-player/${id}`]);
  }
  deletePlayers(id: number) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.getPlayer();

      }

    )
  }
  displayMatchs(id: number) {
    this.router.navigate([`display-match/${id}`]);
  }
  editMatchs(id: number) {
    this.router.navigate([`edit-match/${id}`])
  }

  deleteMatchs(id: number) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
      }
    )
  }
  displayUser(id: number) {
    this.router.navigate([`display-user/${id}`]);
  }
  editUser(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }


  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getAllUser();
      }
    )
  }
  displayBlog(id:number){
    this.router.navigate([`display-blog/${id}`]);
  }
  editBlog(id:number){
    this.router.navigate([`edit-blog/${id}`]);
  }
  deleteBlog(id:number){
    this.blogService.deleteBlog(id).subscribe(
      ()=>{
        this.getAllBlog();
      }
    )
  }
}
