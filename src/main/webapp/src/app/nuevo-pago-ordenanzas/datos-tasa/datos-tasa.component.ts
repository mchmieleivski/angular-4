import { Component, OnInit, Pipe, PipeTransform, Injectable, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'datos-tasa',
  templateUrl: './datos-tasa.template.html',
  styleUrls: ['./datos-tasa.style.css']
})
export class DatosTasaNuevoPagoComponent implements OnInit {

  @Input() tasa:any = {};
  
  constructor() { }

  ngOnInit() {
  }

}
