import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const newLocal = 'app/cursos/cursos.module';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'cursos', canActivate: [AuthGuard], canActivateChild: [AlunosGuard], canLoad: [AuthGuard],
    loadChildren: () => import ('./cursos/cursos.module').then(x => x.CursosModule),
  },
    { path: 'alunos', canActivate: [AuthGuard], /*canActivateChild: [AlunosGuard],*/  canLoad: [AuthGuard],
    loadChildren: () => import('./alunos/alunos.module').then(x => x.AlunosModule),
  },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: 'home', component: HomeComponent,
  canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
