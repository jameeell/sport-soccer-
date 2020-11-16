import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { ContactComponent } from './component/contact/contact.component';
import { DisplayBlogComponent } from './component/display-blog/display-blog.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //localhost:4200/contact=>Afficher
  //contact componant
  { path: 'contact', component: ContactComponent },
  { path: 'yyy', component: BlogPageComponent },
  { path: 'matches', component: MatchesComponent }, //esm class (MatchesComponent) tal9aha f matches .cpmponent.ts
  { path: 'players', component: PlayersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: 'display-player/:id', component: DisplayPlayerComponent },
  { path: 'display-match/:id', component: DisplayMatchComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'edit-match/:id', component: EditMatchComponent},
  { path: 'display-user/:id', component: DisplayUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent },
  { path: 'display-blog/:id', component: DisplayBlogComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
