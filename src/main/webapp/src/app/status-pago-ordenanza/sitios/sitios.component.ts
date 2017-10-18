import { Component, OnInit, Pipe, PipeTransform, Injectable, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'status-pago-ordenanza-sitios',
  templateUrl: './sitios.template.html',
  styleUrls: ['./stitios.style.css']
})
export class SitiosComponent implements OnInit {

  @Input() public sitios:any = null; 
  @Output() public seleccionarSitioOutput:EventEmitter<any> = new EventEmitter(); 

  @ViewChild('modalEditarSitio') public modalEditarSitio:ModalDirective;

  constructor() { }

  ngOnInit() {
  }

  private seleccionarSitio(sitio:any){
    sitio.seleccionado = !sitio.seleccionado;
    this.seleccionarSitioOutput.emit();
  }

  private editarSitio(){
    this.modalEditarSitio.show();
  }

  private aceptarModalEditarSitio(){
    this.modalEditarSitio.hide();
  }

  private cancelarModalEditarSitio(){
    this.modalEditarSitio.hide();
  }

}
