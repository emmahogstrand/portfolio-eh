import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LostInTranslationPageComponent } from './lost-in-translation-page/lost-in-translation-page.component';
import { PokemonApiPageComponent } from './pokemon-api-page/pokemon-api-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'lostInTranslation',
    component: LostInTranslationPageComponent,
},
{
  path: 'pokemonApi',
  component: PokemonApiPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
