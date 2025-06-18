
import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IStep } from '../../_interfaces/i-step';

@Component({
  selector: 'app-scene-component',
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss'
})
export class SceneComponent {
  @Input() steps: IStep[] = [];
  currentStep = signal(0);
  changeCurrentStep = (value: number): void => {
    this.currentStep.update(currentStep => currentStep + value);
  }
}
