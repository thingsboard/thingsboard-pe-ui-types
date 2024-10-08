import { DeviceService } from '@core/http/device.service';
import * as i0 from "@angular/core";
export declare class DeviceGatewayCommandComponent {
    private deviceService;
    deviceId: string;
    constructor(deviceService: DeviceService);
    download($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceGatewayCommandComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceGatewayCommandComponent, "tb-gateway-command", never, { "deviceId": { "alias": "deviceId"; "required": false; }; }, {}, never, never, false, never>;
}
