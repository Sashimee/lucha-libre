import { Component, OnInit } from "@angular/core";
import { wreslerArray } from "../../services/data";

@Component({
  selector: "app-page-wreslers-list",
  templateUrl: "./page-wreslers-list.component.html",
  styleUrls: ["./page-wreslers-list.component.css"]
})
export class PageWreslersListComponent implements OnInit {
  wreslerList = wreslerArray;
  constructor() {}

  ngOnInit(): void {}
}
