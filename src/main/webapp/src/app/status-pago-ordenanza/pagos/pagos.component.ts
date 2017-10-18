import { Component, OnInit, Pipe, PipeTransform, Injectable, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'status-pago-ordenanza-pagos',
  templateUrl: './pagos.template.html'
})
export class PagosComponent implements OnInit {

  @Input() public pagos:any = null; 

  constructor() { }

  ngOnInit() {
  }

}
