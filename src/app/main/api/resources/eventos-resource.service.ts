import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceParams, ResourceRequestBodyType, ResourceRequestMethod, ResourceResponseBodyType } from '@kkoehn/ngx-resource-core';
import { environment } from 'src/environments/environment';
import { IActividad } from '../models/activdad.model';
import { IAsistentes } from '../models/asisitentes.model';
import { IAsistencia } from '../models/asistencia.model';
import { IEvento } from '../models/evento.model';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/eventos`
})
export class EventosResourceService extends Resource{


  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/asistentes/{!nro_evento}',
    responseBodyType: ResourceResponseBodyType.Json
  })
  getAsistentesEvento!: IResourceMethodObservable<{nro_evento : number},IAsistentes[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/listado',
    responseBodyType: ResourceResponseBodyType.Json
  })
  getEventos!: IResourceMethodObservable<void,IEvento[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!idEvento}',
    responseBodyType: ResourceResponseBodyType.Json
  })
  getDatosEvento!: IResourceMethodObservable<{idEvento : number},IEvento>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/actividades',
    requestBodyType: ResourceRequestBodyType.FORM_DATA,
    responseBodyType: ResourceResponseBodyType.Json
  })
  getActividades!: IResourceMethodObservable<{nro_evento : number},IActividad[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/actividades/inscripcion',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Text
  })
  inscribirEvento!: IResourceMethodObservable<IAsistencia,string>;
  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/asistente/comentario',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Text
  })
  setComentario!: IResourceMethodObservable<{comentario:string ,id_asistente:string },string>;
}

