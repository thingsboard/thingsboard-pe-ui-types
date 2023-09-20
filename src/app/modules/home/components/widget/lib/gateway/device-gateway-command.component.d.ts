import { ChangeDetectorRef, OnInit } from '@angular/core';
import { DeviceService } from '@core/http/device.service';
import { PublishLaunchCommand } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceGatewayCommandComponent implements OnInit {
    private cd;
    private deviceService;
    token: string;
    deviceId: string;
    commands: PublishLaunchCommand;
    helpLink: string;
    tabIndex: number;
    constructor(cd: ChangeDetectorRef, deviceService: DeviceService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceGatewayCommandComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceGatewayCommandComponent, "tb-gateway-command", never, { "token": "token"; "deviceId": "deviceId"; }, {}, never, never, false, never>;
}
