import { NgZone } from '@angular/core';
import { TelemetrySubscriber, WebsocketDataMsg } from '@shared/models/telemetry/telemetry.models';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { WebsocketService } from '@core/ws/websocket.service';
import * as i0 from "@angular/core";
export declare class NotificationWebsocketService extends WebsocketService<TelemetrySubscriber> {
    private telemetryWebsocketService;
    protected store: Store<AppState>;
    protected authService: AuthService;
    protected ngZone: NgZone;
    protected window: Window;
    constructor(telemetryWebsocketService: TelemetryWebsocketService, store: Store<AppState>, authService: AuthService, ngZone: NgZone, window: Window);
    subscribe(subscriber: TelemetrySubscriber): void;
    update(subscriber: TelemetrySubscriber): void;
    unsubscribe(subscriber: TelemetrySubscriber): void;
    processOnMessage(message: WebsocketDataMsg): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationWebsocketService>;
}
