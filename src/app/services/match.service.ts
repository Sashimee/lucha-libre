import { Injectable } from "@angular/core";
import { matchArray } from "./match";
@Injectable({
  providedIn: "root"
})
export class MatchService {
  mArray = matchArray;
  constructor() {}
}
