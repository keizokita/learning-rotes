import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos?: any[];
  pagina?: any;
  inscricao?: Subscription;

  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/cursos'], 
      {queryParams: {'pagina': ++this.pagina}});
  }


}
