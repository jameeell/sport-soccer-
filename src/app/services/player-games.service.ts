import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerGamesService {
  playerUrl = 'api/allPlayers';
  constructor(private httpClient: HttpClient) { }
  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }
  //c le mm copi coller avc delete juste changer delete--->get
  getPlayerById(id:any){
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }
  addplayer(allPlayers: any) {
    return this.httpClient.post(this.playerUrl, allPlayers);
  }
  deletePlayer(id: number) {
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }
editPlayer(player:any){
  return this.httpClient.put(`${this.playerUrl}/${player.id}`,player);
}
}
