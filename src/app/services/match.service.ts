import { Injectable } from "@angular/core";
import { matchArray } from "./match";
import { WreslerService } from "../services/wresler.service";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  mArray = matchArray;
  merciIGOR;
  wreslerInfo;
  constructor(public wres: WreslerService) {}
  getMatchInfo(matchId) {
    this.merciIGOR = this.mArray.filter(w => w.matchId == matchId)[0];
    const player1 = this.merciIGOR.wresler1;
    const player2 = this.merciIGOR.wresler2;
    return (this.wreslerInfo = [
      this.wres.getWrestlerInfo(player1),
      this.wres.getWrestlerInfo(player2)
    ]);
  }
}
