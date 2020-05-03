import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecipePageRoutingModule } from "./recipe-routing.module";

import { RecipePage } from "./recipe.page";
import { RecipeFilterPage } from "src/app/pages/recipe-filter/recipe-filter.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipePageRoutingModule],
  declarations: [RecipePage, RecipeFilterPage],
  entryComponents: [RecipeFilterPage],
})
export class RecipePageModule {}
