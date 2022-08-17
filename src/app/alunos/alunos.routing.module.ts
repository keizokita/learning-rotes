import { AlunosDeactivateGuard } from './../guards/alunos-deactivete.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver'

const alunosRoutes: Routes = [
    {path: '', component: AlunosComponent, 
    canActivateChild: [AlunosGuard],
    children : [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno  : AlunoDetalheResolver }
    },
        {path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        }
    ]},
];


@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}