import { UsersService } from "./providers/users.service";
import { LoginService } from "./providers/login.service";
import { LandingComponent } from "./components/landing/landing.component";
// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Style modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { KfCheckInComponent } from './components/kf-check-in/kf-check-in.component';
import { KfNoteInputComponent } from './components/kf-note-input/kf-note-input.component';
import { KfTabComponent } from './components/kf-tab/kf-tab.component';
import { KfNotesViewComponent } from './components/kf-notes-view/kf-notes-view.component';
import { D3Service } from 'd3-ng2-service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { KfIconLink } from './components/kf-icon-link/kf-icon-link.component';
import { ChatComponent } from './components/chat/chat.component';

import { KfProfile } from "./components/profile/profile.component";
import { KfGraphComponent } from "./components/kf-graph/kf-graph.component";
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}

const appRoutes: Routes = [
  { path: '', component:  KfTabComponent},
  { path: 'landing', component: LandingComponent},
  { path: '', component: KfTabComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'check-in', component: KfCheckInComponent},
  { path: 'profile', component: KfProfile },
  { path: 'notes',
      children: [
          { path: '', component: KfNotesViewComponent},
          { path: 'create', component: KfNoteInputComponent },
          { path: 'edit', component: KfNoteInputComponent }
      ]
  }
]
//
//
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    KfCheckInComponent,
    KfNoteInputComponent,
    KfNotesViewComponent,
    KfTabComponent,
    KfIconLink,
    ChatComponent,
    KfProfile,
    KfGraphComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [LoginService, UsersService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {

}
