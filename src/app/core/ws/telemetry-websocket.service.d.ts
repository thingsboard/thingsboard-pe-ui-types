import { NgZone } from '@angular/core';
import { TelemetryPluginCmdsWrapper, TelemetrySubscriber, WebsocketDataMsg } from '@app/shared/models/telemetry/telemetry.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { DashboardReportService } from '@core/http/dashboard-report.service';
import { WebsocketService } from '@core/ws/websocket.service';
import * as i0 from "@angular/core";
export declare class TelemetryWebsocketService extends WebsocketService<TelemetrySubscriber> {
    protected store: Store<AppState>;
    protected authService: AuthService;
    protected ngZone: NgZone;
    protected reportService: DashboardReportService;
    protected window: Window;
    cmdWrapper: TelemetryPluginCmdsWrapper;
    constructor(store: Store<AppState>, authService: AuthService, ngZone: NgZone, reportService: DashboardReportService, window: Window);
    subscribe(subscriber: TelemetrySubscriber, skipPublish?: boolean): void;
    update(subscriber: TelemetrySubscriber): void;
    unsubscribe(subscriber: TelemetrySubscriber, skipPublish?: boolean): void;
    processOnMessage(message: WebsocketDataMsg): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TelemetryWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TelemetryWebsocketService>;
}
