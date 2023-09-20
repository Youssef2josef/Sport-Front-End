import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl: string="http://localhost:8086/api/players";

  constructor(private http:HttpClient) { }

  addPlayer(playerObj){
    return this.http.post(this.playerUrl,playerObj)
  }
  getAllPlayers(){
    return this.http.get(this.playerUrl);
  }
  editPlayer(playerObj){
    return this.http.put(this.playerUrl, playerObj)
  }
  getPlayerById(id){
    return this.http.get(this.playerUrl + "/" + id);
  }
  deletePlayerById(id){
    return this.http.delete(this.playerUrl + "/" + id);
  }
}
