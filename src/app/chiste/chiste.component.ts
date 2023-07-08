import { Component } from '@angular/core';
import { ChisteService } from '../chiste.service';


@Component({
  selector: 'app-chiste',
  templateUrl: './chiste.component.html',
  styleUrls: ['./chiste.component.css']
})
export class ChisteComponent {
  informacionRecibida:any
  constructor(private variableServicio:ChisteService){
    this.variableServicio.obtenerChisteRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })

  }

  obtener(){
    this.variableServicio.obtenerChisteRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })
  }
}
