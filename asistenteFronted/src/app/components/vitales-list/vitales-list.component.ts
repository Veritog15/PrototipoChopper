import { Component, OnInit } from '@angular/core';
import { VitalesService } from '../../services/vitales.services';
import { ErroresService } from '../../services/errores.service';

@Component({
  selector: 'app-vitales-list',
  templateUrl: './vitales-list.component.html'
})
export class VitalesListComponent implements OnInit {
  registros: any[] = [];
  errores: any[] = [];

  constructor(
    private vitalesService: VitalesService,
    private erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.vitalesService.obtenerRegistros().subscribe(data => {
      this.registros = data;
    });

    this.erroresService.obtenerErrores().subscribe(data => {
      this.errores = data;
    });
  }
}
