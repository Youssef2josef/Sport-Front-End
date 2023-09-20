import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string="http://localhost:8086/api/matches";
  constructor(private http:HttpClient) { }
  addMatch(matchObj){
    return this.http.post(this.matchUrl,matchObj)
  }
  getAllMatchs(){
    return this.http.get(this.matchUrl);
  }
  editMatch(matchObj){
    return this.http.put(this.matchUrl, matchObj)
  }
  getMatchById(id){
    return this.http.get(this.matchUrl + "/" + id);
  }
  deleteMatchById(id){
    return this.http.delete(this.matchUrl + "/" + id);
  }
}
