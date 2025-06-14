import { Component, OnInit, inject } from '@angular/core';

import { EscenaComponent } from '../escena/escena.component';

import { StepsService } from '../../_services/steps';
import { IStep } from '../../_interfaces/i-step';

@Component({
  selector: 'home-component',
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  steps: IStep[] = [];
  private stepsService = inject(StepsService);

  ngOnInit() {
    this.steps = this.stepsService.getSteps();
  }
}
