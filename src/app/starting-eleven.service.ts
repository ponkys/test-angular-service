import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Player} from './player.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StartingElevenService {
  private _teamURL = '../assets/data/team-209.json';
  players: Player[];
  starters: Player[];
  public playersUpdated = new Subject<any>();
  public startersUpdated = new Subject<any>();
  selectedPlayer: Player;
  constructor(private httpService: HttpClient) {}

  /* click on the list
  choose the player to add. if a position on the pitch is already selected, add the player immediately*/
  choosePlayer(selectedPlayer: Player) {
    if (this.selectedPlayer) {
      this.selectedPlayer.selected = false;
    }
    this.selectedPlayer = selectedPlayer;
    this.selectedPlayer.selected = true;
    this.playersUpdated.next(this.players.slice());
    this.startersUpdated.next(this.starters.slice());
  }

  /* click on the pitch
  add or removes a player from the pitch*/
  handlePlayer(selectedPosition) {
    if (this.starters[selectedPosition] != null) {
      /*remove a player from the starters*/
      this.removePlayer(selectedPosition);
    }
    if (this.selectedPlayer != null) {
      /*add a player on the pitch*/
      this.addPlayer(selectedPosition);
      this.selectedPlayer = null;
    }
    this.playersUpdated.next(this.players.slice());
    this.startersUpdated.next(this.starters.slice());
  }

  addPlayer(selectedPosition) {
    this.starters[selectedPosition] = this.selectedPlayer;
    this.selectedPlayer.starter = true;
    this.selectedPlayer.pitch_position = selectedPosition;
    console.log('selected player: '); console.log(this.selectedPlayer);
  }

  removePlayer (pitchPosition) {
    console.log('removed player'); console.log(this.starters[pitchPosition]);
    this.starters[pitchPosition].starter = false;
    this.starters[pitchPosition].selected = false;
    this.starters[pitchPosition] = null;
    /*to do: handle removing position and flag starter from players array*/
  }

  getStarters() {
    this.starters = new Array<Player>(11);
    this.startersUpdated.next(this.starters.slice());
  }

  getPlayers() {
    this.httpService.get(this._teamURL).subscribe(
      data => {
        this.players = data as Player[];
        this.playersUpdated.next(this.players.slice());
        console.log(this.players);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  pitchReset() {
    this.selectedPlayer = null;
    this.starters = new Array<Player>(11);
    /*reset all player position information from the players array*/
    for (const player of this.players) {
      player.starter = false;
      player.pitch_position = null;
      player.selected = false;
    }
    this.playersUpdated.next(this.players.slice());
    this.startersUpdated.next(this.starters.slice());
  }
}
