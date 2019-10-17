import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterial } from './app.material.module';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitDatasetComponent } from "./components/submit-dataset/submit-dataset.component";
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomeNewComponent } from './components/home-new/home-new.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { DatasetsComponent } from './admin-components/datasets/datasets.component';
import { InstancesComponent } from './admin-components/instances/instances.component';
import { UserReportComponent } from './admin-components/user-report/user-report.component';
import { ShortbybottomSheetComponent } from './components/shortbybottom-sheet/shortbybottom-sheet.component';
import { BottomSheetDatasetDescriptionComponent } from './admin-components/bottom-sheet-dataset-description/bottom-sheet-dataset-description.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './admin-components/faq/faq.component';
import { ResourcesComponent } from './admin-components/resources/resources.component';
import { AddResourceComponent } from './admin-components/add-resource/add-resource.component';
import { AddFAQComponent } from './admin-components/add-faq/add-faq.component';
import { InterviewQuestionComponent } from './admin-components/interview-question/interview-question.component';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    HeaderComponent,
    SubmitDatasetComponent,
    AdminPanelComponent,
    HomeNewComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    DatasetsComponent,
    InstancesComponent,
    UserReportComponent,
    ShortbybottomSheetComponent,
    BottomSheetDatasetDescriptionComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DialogComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    FaqComponent,
    ResourcesComponent,
    AddResourceComponent,
    AddFAQComponent,
    InterviewQuestionComponent],
  imports: [BrowserModule, AppRoutingModule, AppMaterial, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [ShortbybottomSheetComponent, BottomSheetDatasetDescriptionComponent, DialogComponent, 
    AddResourceComponent, AddFAQComponent]
})
export class AppModule { }
