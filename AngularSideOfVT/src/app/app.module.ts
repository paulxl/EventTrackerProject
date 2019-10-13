import { VolunteerService } from './services/volunteer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { FormsModule } from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // NgbModule.forRoot(),
  ],
  providers: [
    VolunteerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
