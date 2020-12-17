import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ScoresStoreService {
    scores;

    getScores(): number[][] {
        return this.scores;
    }

    addScores(val: number[][]) {
        this.scores = val;
    }
}