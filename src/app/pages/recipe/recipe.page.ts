import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.page.html",
  styleUrls: ["./recipe.page.scss"],
})
export class RecipePage implements OnInit {
  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  //myapp
  public recipeData = [];
  loadedData: any;

  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit() {
    this.updateRecipes();
  }

  updateRecipes() {
    this.recipeService.getData().subscribe(
      (data) => {
        this.recipeData = data;
      },
      (err) => console.error(err),
      () => console.log("done")
    );
  }

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    // if (this.scheduleList) {
    //   this.scheduleList.closeSlidingItems();
    // }
    // this.confData
    //   .getTimeline(
    //     this.dayIndex,
    //     this.queryText,
    //     this.excludeTracks,
    //     this.segment
    //   )
    //   .subscribe((data: any) => {
    //     this.shownSessions = data.shownSessions;
    //     this.groups = data.groups;
    //   });
  }
  async presentFilter() {
    //   const modal = await this.modalCtrl.create({
    //     component: ScheduleFilterPage,
    //     swipeToClose: true,
    //     presentingElement: this.routerOutlet.nativeEl,
    //     componentProps: { excludedTracks: this.excludeTracks }
    //   });
    //   await modal.present();
    //   const { data } = await modal.onWillDismiss();
    //   if (data) {
    //     this.excludeTracks = data;
    //     this.updateSchedule();
    //   }
  }
}
