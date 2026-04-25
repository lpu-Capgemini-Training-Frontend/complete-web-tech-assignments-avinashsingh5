import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingService, Training } from '../../services/training.service';

@Component({
  selector: 'app-training-list',
  imports: [CommonModule],
  templateUrl: './training-list.html'
})
export class TrainingList {

  trainings: Training[] = [];

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.trainings = this.trainingService.getUpcomingTrainings();
  }
}