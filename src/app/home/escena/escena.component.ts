import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
@Input() infoHijo: any [] = []
contenido: string[] = ['Primera frase', 'Segunda frase', 'Tercera frase'];
currentStep: number = 0;
disabledPrev: boolean = true;
disabledNext: boolean = false;


  constructor() {
    this.updatePrevNextState();
  }

  retroceder() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.updatePrevNextState();
    }
  }

  avanzar() {

    if (this.currentStep < this.contenido.length - 1) {
      this.currentStep++;
      this.updatePrevNextState();
    }
  }

  private updatePrevNextState() {
    this.disabledPrev = this.currentStep === 0;
    this.disabledNext = this.currentStep === this.contenido.length - 1;
  }
}