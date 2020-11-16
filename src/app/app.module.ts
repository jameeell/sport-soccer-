import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceComponent } from './component/service/service.component';
import { LogoComponent } from './component/logo/logo.component';
import { ItemsComponent } from './component/items/items.component';
import { BlogComponent } from './component/blog/blog.component';
import { VideosComponent } from './component/videos/videos.component';
import { ResultsComponent } from './component/results/results.component';
import { NewsComponent } from './component/news/news.component';
import { WordCupComponent } from './component/word-cup/word-cup.component';
import { WordResComponent } from './component/word-res/word-res.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { MatchesComponent } from './component/matches/matches.component';
import { MatchComponent } from './component/matches/match/match.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/players/player/player.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { DisplayBlogComponent } from './component/display-blog/display-blog.component';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    LogoComponent,
    ItemsComponent,
    BlogComponent,
    VideosComponent,
    ResultsComponent,
    NewsComponent,
    WordCupComponent,
    WordResComponent,
    BlogPageComponent,
    MatchesComponent,
    MatchComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddBlogComponent,
    DisplayPlayerComponent,
    EditPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    DisplayUserComponent,
    EditUserComponent,
    ReversePipe,
    DisplayBlogComponent,
    EditBlogComponent  ],
  imports: [
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
