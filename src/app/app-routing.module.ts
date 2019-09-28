import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DatasetsResolverService } from '../_service/datasets-resolver.service';
import { SubmitDatasetComponent } from './components/submit-dataset/submit-dataset.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomeNewComponent } from './components/home-new/home-new.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { DatasetsComponent } from './admin-components/datasets/datasets.component';
import { UserReportComponent } from './admin-components/user-report/user-report.component';
import { InstancesComponent } from './admin-components/instances/instances.component';
const routes: Routes = [

  {
    path: '',
    component: HomeNewComponent,
    resolve: {
      datasets: DatasetsResolverService
    }
  }
  , {
    path: 'old',
    component: HomeComponent,
    resolve: {
      datasets: DatasetsResolverService
    }
  },
  {
    path: 'submitdataset',
    component: SubmitDatasetComponent
  },
  {
    path: 'Datasets',
    component: DatasetsComponent,
  },
  {
    path: 'adminpanel',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'instances',
        pathMatch: 'full'
      },
      {
        path: 'user_report',
        component: UserReportComponent,
        resolve: {
          datasets: DatasetsResolverService
        }
      }, {
        path: 'instances',
        component: InstancesComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
