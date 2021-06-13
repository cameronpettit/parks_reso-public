import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pass } from '../models/pass';
import { ApiService } from './api.service';
import { EventKeywords, EventObject, EventService } from './event.service';

@Injectable({
    providedIn: 'root'
})
export class PassService {
    private item: BehaviorSubject<any>;

    constructor(
        private apiService: ApiService,
        private eventService: EventService
    ) {
        this.item = new BehaviorSubject(null);
    }

    setItemValue(value): void {
        this.item.next(value);
    }

    public getItemValue() {
        return this.item.asObservable();
    }

    clearItemValue(): void {
        this.setItemValue(null);
    }

    async createPass(obj) {
        let postObj = new Pass(obj);

        let res = null;
        try {
            this.checkMandatoryFields(postObj);
            res = await this.apiService.post('pass', postObj);
        } catch (e) {
            console.log('ERROR', e);
            this.eventService.setError(
                new EventObject(
                    EventKeywords.ERROR,
                    e,
                    'Pass Service'
                )
            );
            throw e;
        }
        return res;
    }

    private checkMandatoryFields(obj) {
        // the only field not mandatory is 'license'
        for (let key in obj) {
            if (obj[key] === '' && key !== 'licence') {
                throw ('You must provide a value for all mandatory fields')
            }
        }
    }

}
