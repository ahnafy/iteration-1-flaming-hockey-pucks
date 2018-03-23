import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';


import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeService} from "./home/home.service";
import {UserListComponent} from './users/user-list.component';
import {UserListService} from './users/user-list.service';
import {Routing} from './app.routes';
import {APP_BASE_HREF} from '@angular/common';
import {ResourcesComponent} from "./resources/resources.component";
import {CustomModule} from './custom.module';
import {AddUserComponent} from './users/add-user.component';
import {ResponseComponent} from "./home/response.component";
import {ReportsComponent} from "./reports/reports.component";
import {ReportsService} from "./reports/reports.service";
import {JournalingComponent} from "./journaling/journaling.component";
import {GoalsComponent} from "./goals/goals.component";
import {GoalsService} from "./goals/goals.service";
import {AddGoalComponent} from "./goals/add-goals.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ResourcesService} from "./resources/resources.service";
import {AddResourcesComponent} from "./resources/add-resources.component";

import {JournalListComponent} from "./journals/journal-list.component";
import {JournalListService} from "./journals/journal-list.service";
import {AddJournalComponent} from './journals/add-journal.component';
import {EditJournalComponent} from './journals/edit-journal.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        Routing,
        CustomModule,
        FlexLayoutModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UserListComponent,
        AddUserComponent,
        ResourcesComponent,
        ResponseComponent,
        ReportsComponent,
        JournalingComponent,
        GoalsComponent,
        AddGoalComponent,
        JournalListComponent,
        AddJournalComponent,
        EditJournalComponent,
        AddResourcesComponent

    ],
    providers: [
        UserListService,
        HomeService,
        ReportsService,
        GoalsService,
        JournalListService,
        ResourcesService,

        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
    ],
    entryComponents: [
      AddUserComponent,
        ResponseComponent,
        AddGoalComponent,
        AddJournalComponent,
        EditJournalComponent,
        AddResourcesComponent

    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
