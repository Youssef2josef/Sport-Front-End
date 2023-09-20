import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl: string = "http://localhost:8086/api/teams";

  constructor(private http:HttpClient) { }

  addTeam(playerObj) {
    return this.http.post(this.teamUrl, playerObj)
  }
  getAllTeams() {
    return this.http.get(this.teamUrl);
  }
  editTeam(playerObj) {
    return this.http.put(this.teamUrl, playerObj)
  }
  getTeamById(id) {
    return this.http.get(this.teamUrl + "/" + id);
  }
  deleteTeamById(id) {
    return this.http.delete(this.teamUrl + "/" + id);
  }
}
