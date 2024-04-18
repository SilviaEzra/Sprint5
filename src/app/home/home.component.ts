import { Component, Input  } from '@angular/core';
import { EscenaComponent } from './escena/escena.component';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() info: any [] = []
  constructor(public StepsService: StepsService){
    this.info = StepsService.contenido
    
  }
}
