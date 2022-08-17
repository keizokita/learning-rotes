import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
        
            //console.log(route);
            //console.log(state);


        console.log('AlunosGuard: Guarda de rota filha');

        if (state.url.includes('editar')){
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }

        return true;
    }

}