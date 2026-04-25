import { Routes } from '@angular/router';
import { AddTraining } from './components/add-training/add-training';
import { TrainingList } from './components/training-list/training-list';

export const routes: Routes = [
  { path: '', redirectTo: 'trainings', pathMatch: 'full' },
  { path: 'add-training', component: AddTraining },
  { path: 'trainings', component: TrainingList }
];