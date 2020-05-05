import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  recipe = {
    id: "r3",
    title: "Hot Water",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/800px-Schnitzel.JPG",
    ingredients: ["French fries", "pork meat", "salad"],
  };
  currentId: any;
  recipeData = [];
  myrecipe: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeService.getDetail().subscribe((data: any) => {
      const recipeId = this.route.snapshot.paramMap.get("recipeId");
      for (const recipe of data) {
        if (recipe.id === recipeId) {
          this.myrecipe = recipe;
          this.recipe = recipe;
          console.log(recipe);
          // this.isFavorite = this.userProvider.hasFavorite(
          //   this.session.name
          // );

          break;
        }
      }
    });
    console.log(this.myrecipe);
  }

  getUrl() {
    return "url(" + this.recipe.imageUrl + ")";
  }
}
