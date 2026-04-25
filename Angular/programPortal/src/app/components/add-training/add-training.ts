import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Training, TrainingService } from '../../services/training.service';

@Component({
  selector: 'app-add-training',
  imports: [FormsModule],
  templateUrl: './add-training.html',
  styleUrl: './add-training.css',
})

export class AddTraining {
  training : Training = {
    title : '',
    topic : '',
    maxTrainees: 0,
    startDate: '',
    endDate: '',
    trainerName: '',
    venue: ''
  };

  constructor(private trainingService: TrainingService){};

  addTraining(){
    this.trainingService.addTraining({...this.training});

    alert("Training added Successfully");

    this.training = {
      title: '',
      topic: '',
      maxTrainees: 0,
      startDate: '',
      endDate: '',
      trainerName: '',
      venue: ''
    };

  }

}
