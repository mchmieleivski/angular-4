import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-ordenanzas',
  templateUrl: './ordenanzas.component.html',
  styleUrls: ['./ordenanzas.component.css']
})
export class OrdenanzasComponent implements OnInit {
  public totalItems = 64;
  public currentPage = 4;
  public smallnumPages = 0;

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  constructor(public toasterService: ToasterService) { }

  ngOnInit() {
  }

 filtrar(){
    this.toasterService.pop('warning', 'Ingrese criterios de busqueda.', 'Sin datos !');
 }
}
