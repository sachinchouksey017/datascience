import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterial } from './app.material.module';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent} from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitDatasetComponent} from "./components/submit-dataset/submit-dataset.component";
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomeNewComponent } from './components/home-new/home-new.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [AppComponent,  HomeComponent, HeaderComponent,SubmitDatasetComponent, AdminPanelComponent, HomeNewComponent, AdminLoginComponent, AdminDashboardComponent],
  imports: [BrowserModule, AppRoutingModule, AppMaterial,HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
