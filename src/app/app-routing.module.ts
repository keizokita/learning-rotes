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
  { path: 'cursos', canActivate: [AuthGuard], canActivateChild: [AlunosGuard],
    loadChildren: () => import ('./cursos/cursos.module').then(x => x.CursosModule),
  },
    { path: 'alunos', canActivate: [AuthGuard], //canActivateChild: [AlunosGuard],
    loadChildren: () => import('./alunos/alunos.module').then(x => x.AlunosModule),
  },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: '', component: HomeComponent,
  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
