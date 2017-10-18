import { Component, OnInit, Pipe, PipeTransform, Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'status-pago-ordenanza',
  templateUrl: './satus-pago-ordenanza.template.html',
  styleUrls: ['./satus-pago-ordenanza.style.css']
})
export class StatusPagoOrdenanzasComponent implements OnInit {

  private sitios:any = null;
  private pagos:any = null;

  constructor() { }

  ngOnInit() {
  }


  private cargarSitios(tasa:any){
    this.sitios = [
      {
        seleccionado: false,
        ubicacion:1,
        nombre:'Nombre sitio 1',
        estructura: 'FAST SITE',
        localidad: 'Córdoba',
        estado: 'ACTIVO',
        pesoSitio: 100,
        fechaDeclaracion: '01/05/2010'
      },
      {
        seleccionado: false,
        ubicacion:2,
        nombre:'Nombre sitio 2',
        estructura: 'FAST SITE',
        localidad: 'Córdoba',
        estado: 'ACTIVO',
        pesoSitio: 100,
        fechaDeclaracion: '01/05/2010'
      },
      {
        seleccionado: false,
        ubicacion:3,
        nombre:'Nombre sitio 3',
        estructura: 'FAST SITE',
        localidad: 'Villa Carlos Paz',
        estado: 'ACTIVO',
        pesoSitio: 100,
        fechaDeclaracion: '01/05/2010'
      },
      {
        seleccionado: false,
        ubicacion:4,
        nombre:'Nombre sitio 4',
        estructura: 'FAST SITE',
        localidad: 'La Falda',
        estado: 'BAJA',
        pesoSitio: 100,
        fechaDeclaracion: '01/05/2010'
      },

    ];
  }

  private cargarPagos(sitio:any){
    this.pagos = [];
  }

}
