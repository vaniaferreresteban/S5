
import { Component, Input,signal} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IStep } from '../../_interfaces/i-step';

@Component({
  selector: 'app-escena-component',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
@Input() steps:IStep[]=[];
currentStep=signal(0);
changeCurrentStep=(value:number):void=>{
this.currentStep.update(currentStep=>currentStep+value);
}
}
