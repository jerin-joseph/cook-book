import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/app/tabs",
    pathMatch: "full",
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  // {
  //   path: 'support',
  //   loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  // },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "recipe-detail",
    loadChildren: () =>
      import("./pages/recipe-detail/recipe-detail.module").then(
        (m) => m.RecipeDetailPageModule
      ),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "recipe-detail",
    loadChildren: () =>
      import("./pages/recipe-detail/recipe-detail.module").then(
        (m) => m.RecipeDetailPageModule
      ),
  },

  // {
  //   path: 'tutorial',
  //   loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
  //   canLoad: [CheckTutorial]
  // }
];

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'recipe',
//     loadChildren: () => import('./pages/recipe/recipe.module').then( m => m.RecipePageModule)
//   },
//   {
//     path: 'profile',
//     loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'signup',
//     loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
//   },
//   {
//     path: 'tabs-page',
//     loadChildren: () => import('./pages/tabs-page/tabs-page.module').then( m => m.TabsPagePageModule)
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
