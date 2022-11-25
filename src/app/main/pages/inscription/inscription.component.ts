import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IActividad } from '../../api/models/activdad.model';
import { IEvento } from '../../api/models/evento.model';
import { EventosResourceService } from '../../api/resources/eventos-resource.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public evento!: IEvento
  public actividades!: IActividad[]
  public inscripcionActividadesForm!: FormGroup;
  public actividadesAsistir: IActividad[] = [];
  public descripcion: any;
  constructor(private _fb: FormBuilder, private _route: ActivatedRoute, private _service: EventosResourceService, private _router: Router) {
    this.inscripcionActividadesForm = this._fb.group({
      apellido: ["", [Validators.required, Validators.maxLength(40)]],
      nombre: ["", [Validators.required, Validators.maxLength(255)]],
      correo: ["", [Validators.required, Validators.maxLength(255)]],
      confirmarCorreo: ["", [Validators.required, Validators.maxLength(255)]],
      actividades: ["", [Validators.required, Validators.maxLength(255)]],
    });

  }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.evento = data['evento'];
      this.actividades = data['actividades']
      console.log('datos evento: ', data)
      console.log('actividades: ', data['actividades'])
    })
     this.descripcion =this.evento.desc_evento;
  }

  inscribir = () => {
    this.inscripcionActividadesForm.setValue({
      apellido: this.inscripcionActividadesForm.value.apellido,
      nombre: this.inscripcionActividadesForm.value.nombre,
      correo: this.inscripcionActividadesForm.value.correo,
      confirmarCorreo: this.inscripcionActividadesForm.value.confirmarCorreo,
      actividades: JSON.stringify(this.actividadesAsistir)
    })
    console.log('correo',  this.inscripcionActividadesForm.value.confirmarCorreo)

    const { apellido, nombre, correo, actividades } = this.inscripcionActividadesForm.value
    this._service.inscribirEvento({ apellido, nombre, correo, actividades, nro_evento: this.evento.nro_evento }).subscribe((codigos: string) => {
      this._router.navigate(['/confirmacion', codigos], { relativeTo: this._route })
    });
  }

  setActividades = (nroActividad: number) => {
    this.actividadesAsistir.push({ nro_actividad: nroActividad })
  }
}
