import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IActividad } from '../models/activdad.model';
import { IAsistentes } from '../models/asisitentes.model';
import { IEvento } from '../models/evento.model';
import { EventosResourceService } from '../resources/eventos-resource.service';

@Injectable()
export class ResolverService implements Resolve<IEvento[]> {

  constructor(private _service: EventosResourceService) { }

  resolve(): IEvento[] | Observable<IEvento[]> | Promise<IEvento[]> {
    
    return this._service.getEventos();
  }
}

@Injectable()
export class DatosEventoResolver implements Resolve<IEvento> {
  constructor(private _service: EventosResourceService, private route: Router) { }
  resolve(route: ActivatedRouteSnapshot): IEvento | Observable<IEvento> | Promise<IEvento> {
    return this._service.getDatosEvento({idEvento: Number(route.paramMap.get('idEvento'))});
  }
}

@Injectable()
export class ActividadesEventoResolver implements Resolve<IActividad[]> {
  constructor(private _service: EventosResourceService) { }
  resolve(route: ActivatedRouteSnapshot): IActividad[] | Observable<IActividad[]> | Promise<IActividad[]> {
    return this._service.getActividades({nro_evento: Number(route.paramMap.get('idEvento'))});
  }
}
@Injectable()
export class AsisitentesEventoResolver implements Resolve<IAsistentes[]> {

  constructor(private _service: EventosResourceService) { }
  resolve(route: ActivatedRouteSnapshot): IAsistentes[] | Observable<IAsistentes[]> | Promise<IAsistentes[]> {    
    return this._service.getAsistentesEvento({nro_evento: Number(route.paramMap.get('idEvento'))});
  }
}

