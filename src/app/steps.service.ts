import { Injectable } from '@angular/core';
import { iStep } from './interfaces';



@Injectable({
  providedIn: 'root'
})
export class StepsService {
  contenido: iStep[] = [
   {
    title: 'Dedicar muchas horas', descripcion: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.', 
img:"../../../assets/imagenes/meditation.svg", color:"#4da2a9"
   },
   {
    title: 'Programa projectes propis', descripcion: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.', 
img:"../../../assets/imagenes/programming.svg", color:"#d3d4d9"
   },
   {
    title: 'Procura descansar', descripcion: 'Descansar bé i desconnectar són vitals. Daquesta manera reduiràs lestrès i l ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.', 
img:"../../../assets/imagenes/time_managment.svg", color:"#ffd167"
   },
  ]


  constructor() { }
obtenerDatosPaso(indice: number): iStep {
    if (indice >= 0 && indice < this.contenido.length) {
      return this.contenido[indice];
    } else {
      return { title: '', descripcion: '', img: '', color: '' }; // Devolver un paso vacío por defecto
    }
  }
}



