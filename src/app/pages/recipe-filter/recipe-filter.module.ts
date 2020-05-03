import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeFilterPageRoutingModule } from './recipe-filter-routing.module';

import { RecipeFilterPage } from './recipe-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeFilterPageRoutingModule
  ],
  declarations: [RecipeFilterPage]
})
export class RecipeFilterPageModule {}
