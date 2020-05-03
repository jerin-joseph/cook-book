import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TabsPageRoutingModule } from "./tabs-routing.module";

import { TabsPage } from "./tabs.page";
import { AboutPageModule } from "../about/about.module";
import { RecipePageModule } from "../recipe/recipe.module";
import { ProfilePageModule } from "../profile/profile.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    AboutPageModule,
    RecipePageModule,
    ProfilePageModule,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
