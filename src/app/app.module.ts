import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { TableComponent } from './table/table.component';
import { MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatTableModule,
        MatNativeDateModule,
        GoogleChartsModule,
        NgxChartsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTooltipModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
