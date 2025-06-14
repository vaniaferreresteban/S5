
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IStep } from '../../_interfaces/i-step';

@Component({
  selector: 'app-escena',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
@Input() steps:IStep[]=[]
}
