import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LanguageService } from '@language-app/core-data';
import { LanguageComponent } from './language/language.component';
import { LoginComponent } from '@language-app/ui-login'

const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'words', component: LanguageComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}

];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule {}
