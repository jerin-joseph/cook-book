import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeFilterPage } from './recipe-filter.page';

describe('RecipeFilterPage', () => {
  let component: RecipeFilterPage;
  let fixture: ComponentFixture<RecipeFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
