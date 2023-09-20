import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TeamComponent } from './components/team/team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { TeamFilterPipe } from './pipes/team-filter.pipe';
import { DeleteMatchComponent } from './components/delete-match/delete-match.component';
import { DeleteTeamComponent } from './components/delete-team/delete-team.component';
import { DeletePlayerComponent } from './components/delete-player/delete-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerFilterPipe } from './pipes/player-filter.pipe';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { MatchesClientComponent } from './components/matches-client/matches-client.component';
import { TeamsClientComponent } from './components/teams-client/teams-client.component';
import { PlayersClientComponent } from './components/players-client/players-client.component';
import { InterceptorService } from './services/interceptor.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { DataTableComponent } from './components/data-table/data-table.component';



//import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    ArticleComponent,
    AddMatchComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    MyfilterPipe,
    DashboardComponent,
    MatchesTableComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    AddTeamComponent,
    TeamsComponent,
    PlayersComponent,
    AddPlayerComponent,
    TeamComponent,
    EditTeamComponent,
    DisplayTeamComponent,
    TeamFilterPipe,
    DeleteMatchComponent,
    DeleteTeamComponent,
    DeletePlayerComponent,
    DisplayPlayerComponent,
    EditPlayerComponent,
    PlayerComponent,
    PlayerFilterPipe,
    SignupAdminComponent,
    DashboardClientComponent,
    MatchesClientComponent,
    TeamsClientComponent,
    PlayersClientComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//here TDF Module
    ReactiveFormsModule,//here RF module
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
  ],
  providers : [  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
