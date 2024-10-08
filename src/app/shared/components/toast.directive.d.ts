import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, ViewContainerRef } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationMessage } from '@app/core/notification/notification.models';
import { ToastNotificationService } from '@core/services/toast-notification.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButton } from '@angular/material/button';
import { AnimationTriggerMetadata, AnimationEvent } from '@angular/animations';
import * as i0 from "@angular/core";
export declare class ToastDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private viewContainerRef;
    private notificationService;
    private snackBar;
    private ngZone;
    private breakpointObserver;
    private cd;
    toastTarget: string;
    private notificationSubscription;
    private hideNotificationSubscription;
    private snackBarRef;
    private toastComponentRef;
    private currentMessage;
    private dismissTimeout;
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, notificationService: ToastNotificationService, snackBar: MatSnackBar, ngZone: NgZone, breakpointObserver: BreakpointObserver, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private showToastPanel;
    private showSnackBar;
    private shouldDisplayMessage;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastDirective, "[tb-toast]", never, { "toastTarget": { "alias": "toastTarget"; "required": false; }; }, {}, never, never, false, never>;
}
interface ToastPanelData {
    notification: NotificationMessage;
    parent?: ElementRef;
    panelClass: string[];
    destroyToastComponent: () => void;
}
export declare const toastAnimations: {
    readonly showHideToast: AnimationTriggerMetadata;
};
export type ToastAnimationState = 'default' | 'opened' | 'closing';
export declare class TbSnackBarComponent implements AfterViewInit, OnDestroy {
    private data;
    private elementRef;
    private snackBarRef;
    actionButton: MatButton;
    get panelClass(): string[];
    private parentEl;
    private snackBarContainerEl;
    private parentScrollSubscription;
    notification: NotificationMessage;
    animationState: ToastAnimationState;
    animationParams: {
        open: number;
        close: number;
    };
    constructor(data: ToastPanelData, elementRef: ElementRef, snackBarRef: MatSnackBarRef<TbSnackBarComponent>);
    ngAfterViewInit(): void;
    private updatePosition;
    private updateContainerRect;
    ngOnDestroy(): void;
    action(event: MouseEvent): void;
    onHideFinished(event: AnimationEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbSnackBarComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbSnackBarComponent, "tb-snack-bar-component", never, {}, {}, never, never, false, never>;
}
export {};
