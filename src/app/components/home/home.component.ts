import { Component, OnInit } from '@angular/core';

import { EscenaComponent } from '../escena/escena.component';

import { StepsService } from '../../_services/steps';
import { IStep } from '../../_interfaces/i-step';

@Component({
  selector: 'app-home',
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
   steps: IStep[] = [];
  constructor(private stepsService: StepsService) {}
  
  ngOnInit() {
    this.steps=this.stepsService.getSteps();
  }
  
}
