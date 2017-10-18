import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-Home-form',
  templateUrl: './Home-form.component.html',
  styleUrls: ['./Home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  municipioForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
