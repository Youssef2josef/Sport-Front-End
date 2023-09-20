import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DeleteMatchComponent } from './components/delete-match/delete-match.component';
import { DeleteTeamComponent } from './components/delete-team/delete-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { LoginComponent } from './components/login/login.component';
import { DeletePlayerComponent } from './components/delete-player/delete-player.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"contact", component: ContactComponent },
  { path:"addMatch", component: AddMatchComponent },
  { path:"addTeam", component: AddTeamComponent },
  { path:"addPlayer", component: AddPlayerComponent },
  { path: "signup", component: SignupComponent },
  { path: "signup/admin", component: SignupAdminComponent },
  { path: "login", component: LoginComponent },
  { path: "matches", component: MatchesComponent },
  { path: "teams", component: TeamsComponent },
  { path: "players", component: PlayersComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboardClient", component: DashboardClientComponent },
  //:id => Param
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "editTeam/:id", component: EditTeamComponent },
  { path: "editPlayer/:id", component: EditPlayerComponent },
  { path: "displayMatch/:id", component: DisplayMatchComponent },
  { path: "displayTeam/:id", component: DisplayTeamComponent },
  { path: "displayPlayer/:id", component: DisplayPlayerComponent },
  { path: "deletMatch", component: DeleteMatchComponent },
  { path: "deletPlayer", component: DeletePlayerComponent },
  { path: "deleteTeam", component: DeleteTeamComponent },
  { path: "dataTable", component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }