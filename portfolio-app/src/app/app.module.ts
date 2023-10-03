import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LostInTranslationPageComponent } from './lost-in-translation-page/lost-in-translation-page.component';
import { PokemonApiPageComponent } from './pokemon-api-page/pokemon-api-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    LostInTranslationPageComponent,
    PokemonApiPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
