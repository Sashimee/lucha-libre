import { Component, OnInit } from "@angular/core";
import { wreslerArray } from "../../services/data";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-page-wresler-details",
  templateUrl: "./page-wresler-details.component.html",
  styleUrls: ["./page-wresler-details.component.css"]
})
export class PageWreslerDetailsComponent implements OnInit {
  myWresler;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const capturedId = params.get('wreslerId');
      this.myWresler = wreslerArray.filter(w => w.wreslerId === capturedId)[0];
    })
  }
}
