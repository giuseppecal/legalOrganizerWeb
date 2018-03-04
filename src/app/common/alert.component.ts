import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {AlertService} from './alert.service';
import {Response} from './response';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnDestroy {
    private subscription: Subscription;
    message: Response;

    constructor(private alertService: AlertService) {
        // subscribe to alert messages
        this.subscription = alertService.receiveMessage().subscribe(message => { this.message = message; });
    }

    ngOnDestroy(): void {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    }
}
