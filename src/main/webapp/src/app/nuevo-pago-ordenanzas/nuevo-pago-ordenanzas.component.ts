import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'nuevo-pago-ordenanzas',
  templateUrl: './nuevo-pago-ordenanzas.template.html',
  styleUrls: ['./nuevo-pago-ordenanzas.style.css']
})
export class NuevoPagoOrdenanzasComponent implements OnInit {
  
  private tasa:any = {
   estructura:'FAST SITE',
   montoPagoUnico:'$ 980',
   periocidad: 'ANUAL',
   montoRecurrente:'$ 980',
   primerVencimiento:'10/05/2010'
  }

  private nuevoPago:any = {
    sitio:'',
    fechaPago:null,
    estado:null,
    montoPago:0,
    reciboPago:null,
    libreDeuda:null,
    fechaDerivacion:null,
    informacionAdicional:null,
    observaciones:''
  }

  private pagos:any = [
    {
        sitio:'sitio 1',
        fechaPago:'2007-01-10',
        estado:'PAGO',
        montoPago:6000,
        reciboPago:'SI',
        libreDeuda:'SI',
        fechaDerivacion:'2009-01-31',
        informacionAdicional:'',
        observaciones:''
      },
      {
        sitio:'sitio 2',
          fechaPago:'2007-07-20',
          estado:'DERIVADO',
          montoPago:2000,
          reciboPago:'NO',
          libreDeuda:'SI',
          fechaDerivacion:'2009-07-22',
          informacionAdicional:'',
          observaciones:''
        },
        {
          sitio:'sitio 3',
          fechaPago:'2007-02-20',
          estado:'JUDICIALIZADO',
          montoPago:5724,
          reciboPago:'SI',
          libreDeuda:'NO',
          fechaDerivacion:'2009-02-17',
          informacionAdicional:'',
          observaciones:''
        },
      {
        sitio:'sitio 4',
        fechaPago:'2007-05-20',
        estado:'DERIVADO',
        montoPago:5522,
        reciboPago:'NO',
        libreDeuda:'NO',
        fechaDerivacion:'2009-05-03',
        informacionAdicional:'',
        observaciones:''
      },
      {
        sitio:'sitio 5',
        fechaPago:'2007-05-20',
        estado:'DERIVADO',
        montoPago:5522,
        reciboPago:'NO',
        libreDeuda:'NO',
        fechaDerivacion:'2009-05-03',
        informacionAdicional:'',
        observaciones:''
      },
      {
        sitio:'sitio 6',
        fechaPago:'2007-05-20',
        estado:'DERIVADO',
        montoPago:5522,
        reciboPago:'NO',
        libreDeuda:'NO',
        fechaDerivacion:'2009-05-03',
        informacionAdicional:'',
        observaciones:''
      }
  ]

  constructor() { }

  ngOnInit() {
  }

  private agregar(){
    this.pagos.push(this.nuevoPago);
    this.resetear();
  }

  private eliminar(pago:any){
    let index = this.pagos.indexOf(pago)
    this.pagos.splice(index, 1)
  }

  private editar(pago:any){
    this.nuevoPago = pago;
  }

  private resetear(){
    let nuevoPago:any = {
      fechaPago:null,
      estado:null,
      montoPago:0,
      reciboPago:null,
      libreDeuda:null,
      fechaDerivacion:null,
      informacionAdicional:null,
      observaciones:''
    }
    this.nuevoPago = nuevoPago;
  }

}
