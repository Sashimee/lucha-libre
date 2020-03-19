import { Injectable } from "@angular/core";
import { wreslerArray } from "./data";
@Injectable({
  providedIn: "root"
})
export class WreslerService {
  wArray = wreslerArray;
  constructor() {}
  getWreslerFromId(providedID) {
    return this.wArray.filter(w => w.wreslerId == providedID)[0];
  }
}
