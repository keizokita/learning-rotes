import { IFormCanDeactivate } from './iform-candeactivate';
import { Observable } from 'rxjs';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {
    
    console.log('guarda de desativacao');

    //return component.podeMudarRota();

    return component.podeDesativar();
  }
}
