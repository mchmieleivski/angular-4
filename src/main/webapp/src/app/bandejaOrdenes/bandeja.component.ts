import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup } from '@angular/forms';
import { CompleterService, CompleterData , CompleterItem } from 'ng2-completer';
@Component({
  selector: 'bandeja',
  templateUrl: './bandeja.html',
  styleUrls: ['./bandeja.component.less']
})
export class BandejaComponent implements OnInit {
  public totalItems = 64;
  public currentPage = 4;
  public smallnumPages = 0;
  public message: string = 'Mandar tarea de Certificación a contratista?';
  public title: string = 'Avanzar?';
    protected searchStr: string;
  protected dataService: CompleterData;
  public selectedOC: string;
  protected searchData = ['0001', '0002', '0003', '00012', '00011', '00014', '00016'];
  
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  constructor(public toasterService: ToasterService , private router: Router) { }

  ngOnInit() {
  }

   filtrar(){
    this.toasterService.pop('warning', 'Orden inexistente.', 'Sin datos !');
 }

 generarCertificacion(){
   console.log(this.selectedOC)
 this.router.navigate(['/status-sitios/editar'])
 }

  protected onSelected(item: CompleterItem) {
    this.selectedOC = item? item.title: "";
    console.log( this.selectedOC)
  }
}
