import { Component, OnInit } from "@angular/core";
import { matchArray } from "../../services/match";
import { MatchService } from "../../services/match.service";
import { WreslerService } from "../../services/wresler.service";

@Component({
  selector: "app-page-dashboard",
  templateUrl: "./page-dashboard.component.html",
  styleUrls: ["./page-dashboard.component.css"]
})
export class PageDashboardComponent implements OnInit {
  matchList = matchArray;
  // wreslter1: any;
  // wreslter2;
  constructor(public m: MatchService, public wres: WreslerService) {}

  matchDetails(match) {
    const wrestler1 = this.m.getMatchInfo(match.matchId)[0];
    const wrestler2 = this.m.getMatchInfo(match.matchId)[1];
    return this.m.getMatchInfo(match.matchId);
  }

  // wrestler2 =this.m.getMatchInfo(this.matchList.matchId)[1]
  ngOnInit(): void {}
}
