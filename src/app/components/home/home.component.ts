import { Component, OnInit, inject } from '@angular/core';

import { SceneComponent } from '../scene/scene.component';

import { StepsService } from '../../_services/steps';
import { IStep } from '../../_interfaces/i-step';

@Component({
  selector: 'app-home-component',
  imports: [SceneComponent],
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
