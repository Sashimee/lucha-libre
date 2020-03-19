import { Injectable } from "@angular/core";
import { wreslerArray } from "../services/data";
@Injectable({
  providedIn: "root"
})
export class WreslerService {
  wreslerArray;
  constructor() {}

  getWrestlerInfo(wID) {
    // this.wreslerArray = params.get('wreslerId');
    return wreslerArray.filter(w => w.wreslerId == wID)[0];
  }
}
