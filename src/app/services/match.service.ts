import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // definir l'adresse 
  matchUrl = 'api/matches';
  constructor(private httpclient: HttpClient) { }
  // get all object
  // action d recuperer (get)
  getAllMatches() {
    return this.httpclient.get(this.matchUrl);
  }
  //get one object 
  getMatchById(id:number){
    return this.httpclient.get(`${this.matchUrl}/${id}`);
    
  }
  // action d  ajouter : inserer  (post) adressa win bach ikhabi matchUrl
  addMatch(match: any) {
    return this.httpclient.post(this.matchUrl, match);
  }
  // delete object from DB
  deleteMatch(id: number) {
    return this.httpclient.delete(`${this.matchUrl}/${id}`);
  }
  editMatch(match:any){
    return this.httpclient.put(`${this.matchUrl}/${match.id}`,match);
  }
}
