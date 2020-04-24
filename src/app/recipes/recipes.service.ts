import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
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

  getAllRecipes() {
    console.log(this.recipes);
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
  }
}
