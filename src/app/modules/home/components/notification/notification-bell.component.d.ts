import { ChangeDetectorRef, NgZone, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { NotificationWebsocketService } from '@core/ws/notification-websocket.service';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class NotificationBellComponent implements OnDestroy {
    private notificationWsService;
    private zone;
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private store;
    private notificationSubscriber;
    private notificationCountSubscriber;
    private countSubject;
    count$: import("rxjs").Observable<string | number>;
    constructor(notificationWsService: NotificationWebsocketService, zone: NgZone, cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, store: Store<AppState>);
    ngOnDestroy(): void;
    showNotification($event: Event, createVersionButton: MatButton): void;
    private initSubscription;
    private unsubscribeSubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBellComponent, "tb-notification-bell", never, {}, {}, never, never, false, never>;
}
