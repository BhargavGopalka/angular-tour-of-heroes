import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';
import { HttpModule }			from '@angular/http';

import { HeroDetailComponent } 	from './hero-detail.component';
import { AppComponent }  		from './app.component';
import { HeroesComponent } 		from './heroes.component';
import { HeroService } 			from './hero.service';

import { AppRoutingModule } 	from './app-routing.module';
import { DashboardComponent }	from './dashboard.component';

import { InMemoryWebApiModule }	from 'angular-in-memory-web-api';
import { InMemoryDataService }	from './in-memory-data.service';
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent ],
  providers: 	  [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
}
