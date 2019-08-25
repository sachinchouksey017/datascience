import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { DatasetsResolverService} from "../_service/datasets-resolver.service";
import { SubmitDatasetComponent} from "./components/submit-dataset/submit-dataset.component";
import {AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    resolve: {
      datasets: DatasetsResolverService
    }
  }
,
  {
    path: 'submitdataset',
    component: SubmitDatasetComponent
  },
  {
    path: 'header1',
    component: HeaderComponent,
  },
  {
    path: 'adminpanel',
    component: AdminPanelComponent,
    resolve: {
      datasets: DatasetsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
