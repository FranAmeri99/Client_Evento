import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvento } from '../../api/models/evento.model';
import { WeatherService } from '../../Services/weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventos: IEvento[] = [];
  contador:number=0
  public dia:any;
  clima:any;
  
  public fecha!:string;
   constructor(private _weather:WeatherService,  private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this._route.data.subscribe((data) => {
      this.eventos = data['eventos']
        //console.log('this.eventos', data)
    })
    this.getWeatherH()
  }

  getWeatherH(){

    this._weather.getWather().subscribe(
      res=>{
        this.clima = res, 
        console.log('this.getWeather: ', res)},
      err=>console.log('this.getWeather: ', err)
    )
    this.contador = this.contador+1
  }

  getIndice(day:number){
    this.fecha = "day"+day
    const pordia = this.clima[this.fecha]
    
  
    console.log("indice: ",day," ",pordia)
    pordia.test = `https://v5i.tutiempo.net/wi/01/50/`+pordia.icon+`.png`
    return pordia
   // return this.dia.temperature_max + "°C - " + this.dia.text
  }
  getAhora(){
    this.fecha = "hour_hour"
    const actual = this.clima[this.fecha]
    actual["hour1"].ico = `https://v5i.tutiempo.net/wi/01/50/`+actual["hour1"].icon+`.png`
    console.log("icono:", actual.ico)

    return actual["hour1"]

  }


  inscribir(idEvento: number){
    this._router.navigate(['/inscripcion', idEvento], { relativeTo: this._route })
  }


}


