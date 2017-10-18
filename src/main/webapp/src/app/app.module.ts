import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { PaginationModule, ModalModule, AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/Home.component';
import { HomeFormComponent } from './home-form/Home-form.component';
import { HomeService } from './servicios/home.service';
import { HomeViewComponent } from './home-view/Home-view.component';
import { BandejaComponent } from './bandejaOrdenes/bandeja.component';
import { StatusSitiosFormComponent } from './status-sitios-form/status-sitios-form.component';

import { OrdenanzasComponent } from './ordenanzas/ordenanzas.component';
import { OrdenanzasFormComponent } from './ordenanzas-form/ordenanzas-form.component';
import {ToasterModule} from 'angular2-toaster';
import { StatusPagoOrdenanzasComponent } from './status-pago-ordenanza/satus-pago-ordenanza.component';
import { TasasComponent } from './status-pago-ordenanza/tasas/tasas.component';
import { SitiosComponent } from './status-pago-ordenanza/sitios/sitios.component';
import { PagosComponent } from './status-pago-ordenanza/pagos/pagos.component';
import { NuevoPagoOrdenanzasComponent } from './nuevo-pago-ordenanzas/nuevo-pago-ordenanzas.component';
import { DatosTasaNuevoPagoComponent } from './nuevo-pago-ordenanzas/datos-tasa/datos-tasa.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
// confirmar - autocompletar
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { Ng2CompleterModule } from "ng2-completer";
@Injectable()
export class NuevoMunicipioResolver implements Resolve<any> {
  constructor(private HomeService: HomeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return null; // this.HomeService.getNuevo();
  }
}

@Injectable()
export class ActualizarMunicipioResolver implements Resolve<any> {
  constructor(private HomeService: HomeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return null; // this.HomeService.get(+route.params['munId']);
  }
}

@Injectable()
export class ViewMunicipioResolver implements Resolve<any> {
  constructor(private HomeService: HomeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return null; // this.HomeService.get(+route.params['munId']);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeFormComponent,
    HomeViewComponent,
    BandejaComponent,
    StatusSitiosFormComponent,
    OrdenanzasComponent,
    OrdenanzasFormComponent,
    StatusPagoOrdenanzasComponent,
    TasasComponent,
    SitiosComponent,
    PagosComponent,
    NuevoPagoOrdenanzasComponent,
    DatosTasaNuevoPagoComponent
  ],
  imports: [ 
      PaginationModule.forRoot(), 
      ModalModule.forRoot(), 
      BrowserModule, 
      FormsModule, 
      AngularFontAwesomeModule,
      HttpModule , 
       ToasterModule ,
       Ng2CompleterModule,
       ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success' // set defaults here
    }),
      RouterModule.forRoot([
  //    { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'home-Ordenes', component: HomeFormComponent , pathMatch: 'full'},
      { path: 'home/:munId', component: HomeFormComponent},
      { path: 'home/view/:munId', component: HomeViewComponent},
      { path: 'bandeja', component: BandejaComponent},
      { path: 'status-sitios/editar', component: StatusSitiosFormComponent},
      { path: 'ordenanzas', component: OrdenanzasComponent, pathMatch: 'full' },
      { path: 'ordenanzas/nuevo', component: OrdenanzasFormComponent},
      { path: 'ordenanzas/status-pago', component: StatusPagoOrdenanzasComponent},
      { path: 'ordenanzas/status-pago/nuevo', component: NuevoPagoOrdenanzasComponent}
      /*{ path: 'nuevo', component: HomeFormComponent, resolve: { municipio: NuevoMunicipioResolver } },
      { path: ':munId', component: HomeFormComponent, resolve: { municipio: ActualizarMunicipioResolver } }
      { path: ':munId', component: HomeViewComponent, resolve: { municipio: ViewMunicipioResolver } }*/
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
