import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { RecipePage } from "../recipe/recipe.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "recipe",
        children: [
          {
            path: "",
            component: RecipePage,
          },
          {
            path: "recipe-details/:recipeId",
            loadChildren: () =>
              import("../recipe-detail/recipe-detail.module").then(
                (m) => m.RecipeDetailPageModule
              ),
          },
        ],
      },

      // {
      //   path: 'speakers',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
      //     },
      //     {
      //       path: 'session/:sessionId',
      //       loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
      //     },
      //     {
      //       path: 'speaker-details/:speakerId',
      //       loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'map',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../map/map.module').then(m => m.MapModule)
      //     }
      //   ]
      // },
      {
        path: "profile",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../profile/profile.module").then(
                (m) => m.ProfilePageModule
              ),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/app/tabs/recipe",
        pathMatch: "full",
      },
    ],
  },
];
// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
