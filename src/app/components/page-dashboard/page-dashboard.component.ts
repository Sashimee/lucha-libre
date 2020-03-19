import { Component, OnInit } from "@angular/core";
import { matchArray } from "../../services/match";

@Component({
  selector: "app-page-dashboard",
  templateUrl: "./page-dashboard.component.html",
  styleUrls: ["./page-dashboard.component.css"]
})
export class PageDashboardComponent implements OnInit {
  matchList = matchArray;
  constructor() {}

  ngOnInit(): void {}
}
