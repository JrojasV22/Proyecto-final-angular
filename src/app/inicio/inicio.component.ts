import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  nombre: string = '';
  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = `¡Bienvenido, ${this.nombre}!`;
  }

  LimpiarInput(){
    this.nombre = '';
  }


openAlert:boolean = false;
constructor(){}
ngOnInit(): void{

}

mostrar(name: string){

this.openAlert = true;
}
}
