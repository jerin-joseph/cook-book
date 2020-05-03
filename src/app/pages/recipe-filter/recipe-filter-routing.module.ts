import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeFilterPage } from './recipe-filter.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeFilterPageRoutingModule {}
