import { Injectable } from "@angular/core";

export interface Training{
    title: string;
    topic: string;
    maxTrainees: number;
    startDate: string;
    endDate: string;
    trainerName: string;
    venue: string;
}

@Injectable({
    providedIn: 'root'
})

export class TrainingService{
    private trainings: Training[] = [];

    addTraining(training: Training){
        this.trainings.push(training);
    }

    getUpcomingTrainings(): Training[]{
        const today = new Date();

        return this.trainings.filter(training=>new Date(training.startDate) >= today);
    }
}

