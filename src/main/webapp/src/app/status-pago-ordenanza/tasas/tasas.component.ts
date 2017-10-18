import { Component, OnInit, Pipe, PipeTransform, Injectable, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'status-pago-ordenanza-tasas',
  templateUrl: './tasas.template.html'
})
export class TasasComponent implements OnInit {

  @Output() public seleccionarTasaOutput:EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  private seleccionarTasa(){
    this.seleccionarTasaOutput.emit();
  }

}
