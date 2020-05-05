import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IReciepe } from "src/app/main/recipe";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  observable: any;
  constructor(public http: HttpClient) {}

  getData(): Observable<IReciepe[]> {
    this.observable = this.http.get<IReciepe[]>("assets/data/recipedata.json");
    return this.observable;
  }

  getDetail(): Observable<IReciepe[]> {
    return this.observable;
  }
}
