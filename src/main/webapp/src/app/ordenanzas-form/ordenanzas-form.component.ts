import { Component, OnInit, Pipe, PipeTransform, Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'app-ordenanzas-form',
  templateUrl: './ordenanzas-form.component.html',
  styleUrls: ['./ordenanzas-form.component.css']
})
export class OrdenanzasFormComponent implements OnInit {

  @ViewChild('modalAsociar') public modalAsociar:ModalDirective;

  municipioForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }


  private asociar(){
    this.modalAsociar.show();
  }

  private aceptarModalAsociar(){
    this.modalAsociar.hide();
  }

  private cancelarModalAsociar(){
    this.modalAsociar.hide();
  }

}
