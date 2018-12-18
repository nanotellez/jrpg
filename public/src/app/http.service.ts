import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  currentPlayerId: any;
  currentMonsterId: any;

  constructor(private _http: HttpClient) { }

  getPlayers() { // GET
    console.log('INSIDE getPlayers()');
    return this._http.get('/api/players');
  }

  getPlayer(id) { // GET
    console.log('INSIDE getPlayer() - ' + id);
    this.currentPlayerId = id;
    return this._http.get('/api/players/' + id);
  }

  createPlayer(newPlayer) { // POST
    console.log('INSIDE createPlayer()');
    return this._http.post('/api/players', newPlayer);
  }

  updatePlayer(player) { // PUT
    console.log('INSIDE updatePlayer() - ' + player.name);
    return this._http.put(`/api/players/${this.currentPlayerId}`, player);
  }

  updateLikes(player) { // PUT
    console.log('INSIDE updateLikes() - ' + player.likes);
    return this._http.put(`/api/players/${this.currentPlayerId}`, player);
  }

  deletePlayer(id) { // DELETE
    console.log('INSIDE deletePlayer()');
    return this._http.delete('/api/players/' + id);
  }


  getMonsters() { // GET
    console.log('INSIDE getMonsters()');
    return this._http.get('/api/monsters');
  }

  getMonster(id) { // GET
    console.log('INSIDE getMonster() - ' + id);
    this.currentMonsterId = id;
    return this._http.get('/api/monsters/' + id);
  }

  createMonster(newMonster) { // POST
    console.log('INSIDE createMonster()');
    return this._http.post('/api/monsters', newMonster);
  }

  updateMonster(monster) { // PUT
    console.log('INSIDE updateMonster() - ' + monster.name);
    return this._http.put(`/api/monsters/${this.currentMonsterId}`, monster);
  }

  deleteMonster(id) { // DELETE
    console.log('INSIDE deleteMonster()');
    return this._http.delete('/api/monsters/' + id);
  }

}
