import { ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Notification, NotificationRequest } from '@shared/models/notification.models';
import { NotificationWebsocketService } from '@core/ws/notification-websocket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ShowNotificationPopoverComponent extends PageComponent implements OnDestroy {
    protected store: Store<AppState>;
    private notificationWsService;
    private zone;
    private cd;
    private router;
    onClose: () => void;
    counter: BehaviorSubject<number>;
    popoverComponent: TbPopoverComponent;
    private notificationSubscriber;
    notifications$: Observable<Notification[]>;
    constructor(store: Store<AppState>, notificationWsService: NotificationWebsocketService, zone: NgZone, cd: ChangeDetectorRef, router: Router);
    ngOnDestroy(): void;
    markAsRead(id: string): void;
    markAsAllRead($event: Event): void;
    viewAll($event: Event): void;
    trackById(index: number, item: NotificationRequest): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowNotificationPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowNotificationPopoverComponent, "tb-show-notification-popover", never, { "onClose": { "alias": "onClose"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
