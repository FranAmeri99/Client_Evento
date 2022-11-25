import { Component, OnInit } from '@angular/core';
import { IEvento } from '../../api/models/evento.model';
import { IAsistentes } from '../../api/models/asisitentes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosResourceService } from '../../api/resources/eventos-resource.service';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css']
})
export class AsistenteComponent implements OnInit {
  public evento!: IEvento
  
  public asistentes!: IAsistentes[]
  constructor( private _route: ActivatedRoute, private _service: EventosResourceService, private _router: Router) { }

  
  ngOnInit(): void {
    this._route.queryParams.subscribe((params) =>{
      console.log("parametros:",params);
    })
    this._route.data.subscribe((data) => {

      console.log('Datos: ', data);
      this.evento = data['eventos']
      console.log('Data eventos: ', data['eventos']);

      this.asistentes = data['asistentes']
      console.log('ID: ', this._route.snapshot.paramMap.get('nro_evento'))
    })

  }

}
