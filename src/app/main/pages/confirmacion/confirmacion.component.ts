import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventosResourceService } from '../../api/resources/eventos-resource.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  public id_asistente: string | null = "";
  public fcomentario!: FormGroup;

  constructor(private _fb: FormBuilder, private _route: ActivatedRoute,  private _service: EventosResourceService, private _router: Router) {
    console.log('-------------entro-----------')
    this.fcomentario = this._fb.group({
      comentario: ["", [Validators.required, Validators.maxLength(4000)]],
      id_asistente: ["", [Validators.required]],

    })
    console.log(this.fcomentario)

   }

  ngOnInit(): void {
    this.id_asistente = this._route.snapshot.paramMap.get('codigoConfirmacio')

  }
  enviarComentario(){
    console.log('entro salio')
    this.fcomentario.setValue({
      comentario : this.fcomentario.value.comentario,
      id_asistente : this._route.snapshot.paramMap.get('codigoConfirmacio')
      
    })
    console.log('id asistente: ',this.fcomentario.value.id_asistente)
    console.log('comentario:',this.fcomentario.value.comentario)
    const { comentario, id_asistente} = this.fcomentario.value
 
    this._service.setComentario({comentario:comentario, id_asistente:id_asistente }).subscribe(() => {
      console.log('set comentario')
    });

  }
  
}
