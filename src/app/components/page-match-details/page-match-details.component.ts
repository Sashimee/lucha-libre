import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { matchArray } from "../../services/match";
import { MatchService } from "../../services/match.service";

@Component({
  selector: "app-page-match-details",
  templateUrl: "./page-match-details.component.html",
  styleUrls: ["./page-match-details.component.css"]
})
export class PageMatchDetailsComponent implements OnInit {
  specificMatch;
  player1;
  player2;
  constructor(private route: ActivatedRoute, public m: MatchService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const capturedId = +params.get("matchId");
      this.specificMatch = matchArray.filter(w => w.matchId == capturedId)[0];
      this.player1 = this.m.matchDetails(this.specificMatch)[0];
      this.player2 = this.m.matchDetails(this.specificMatch)[1];
    });
  }
}
