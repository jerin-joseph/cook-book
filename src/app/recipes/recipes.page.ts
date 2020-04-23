import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/800px-Schnitzel.JPG",
      ingredients: ["French fries", "pork meat", "salad"],
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pasta_Puttanesca.jpg/1920px-Pasta_Puttanesca.jpg",
      ingredients: ["Spaghetti", "tomatoe", "meat"],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
