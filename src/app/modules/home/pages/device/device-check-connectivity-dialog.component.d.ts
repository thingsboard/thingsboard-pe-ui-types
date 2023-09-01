import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DeviceService } from '@core/http/device.service';
import { AttributeData } from '@shared/models/telemetry/telemetry.models';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { EntityId } from '@shared/models/id/entity-id';
import { BasicTransportType, DeviceTransportType, NetworkTransportType, PublishTelemetryCommand } from '@shared/models/device.models';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export interface DeviceCheckConnectivityDialogData {
    deviceId: EntityId;
    afterAdd: boolean;
}
export declare class DeviceCheckConnectivityDialogComponent extends DialogComponent<DeviceCheckConnectivityDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    dialogRef: MatDialogRef<DeviceCheckConnectivityDialogComponent>;
    private deviceService;
    private telemetryWsService;
    private wl;
    private zone;
    loadedCommand: boolean;
    status: boolean;
    latestTelemetry: Array<AttributeData>;
    commands: PublishTelemetryCommand;
    allowTransportType: Set<NetworkTransportType>;
    selectTransportType: NetworkTransportType;
    BasicTransportType: typeof BasicTransportType;
    DeviceTransportType: typeof DeviceTransportType;
    deviceTransportTypeTranslationMap: Map<import("@shared/models/device.models").TransportType, string>;
    showDontShowAgain: boolean;
    dialogTitle: string;
    notShowAgain: boolean;
    helpBaseUrl: string;
    httpTabIndex: number;
    mqttTabIndex: number;
    coapTabIndex: number;
    private telemetrySubscriber;
    private currentTime;
    private transportTypes;
    constructor(store: Store<AppState>, router: Router, data: DeviceCheckConnectivityDialogData, dialogRef: MatDialogRef<DeviceCheckConnectivityDialogComponent>, deviceService: DeviceService, telemetryWsService: TelemetryWebsocketService, wl: WhiteLabelingService, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
    createMarkDownCommand(commands: string | string[]): string;
    private createMarkDownSingleCommand;
    private loadCommands;
    private subscribeToLatestTelemetry;
    private selectTabIndexForUserOS;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCheckConnectivityDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCheckConnectivityDialogComponent, "tb-device-check-connectivity-dialog", never, {}, {}, never, never, false, never>;
}
