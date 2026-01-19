import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Lwm2mSecurityType } from '@shared/models/lwm2m-security-config.models';
import { DeviceId } from "@shared/models/id/device-id";
import { DeviceService } from "@core/http/device.service";
import { Store } from "@ngrx/store";
import { AppState } from "@core/core.state";
import * as i0 from "@angular/core";
export declare class DeviceCredentialsLwm2mComponent implements ControlValueAccessor, Validator, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private deviceService;
    lwm2mConfigFormGroup: UntypedFormGroup;
    securityConfigLwM2MType: typeof Lwm2mSecurityType;
    securityConfigLwM2MTypes: string[];
    credentialTypeLwM2MNamesMap: Map<Lwm2mSecurityType, string>;
    clientKeyTooltipNamesMap: Map<Lwm2mSecurityType, string>;
    private destroy$;
    private propagateChange;
    deviceId: DeviceId;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, deviceService: DeviceService);
    writeValue(obj: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    ngOnDestroy(): void;
    /**
     * AbstractRpcController -> rpcController
     * - API
     * "/api/plugins/rpc/twoway/${this.deviceId.id}"
     * - DiscoveryAll
     * requestBody =  "{\"method\":\"DiscoverAll\"}";
     * - "Registration Update Trigger",
     * requestBody =  "{\"method\": \"Execute\", \"params\": {\"id\": \"/1/0/8\"}}
     * - "Bootstrap-Request Trigger"
     * requestBody =  "{\"method\": \"Execute\", \"params\": {\"id\": \"/1/0/9\"}}
     */
    rebootDevice(isBootstrapServer: boolean): void;
    private initClientSecurityConfig;
    private securityConfigClientModeChanged;
    private securityConfigClientUpdateValidators;
    private setValidatorsNoSecX509;
    private setValidatorsPskRpk;
    private initLwm2mConfigForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsLwm2mComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsLwm2mComponent, "tb-device-credentials-lwm2m", never, { "deviceId": { "alias": "deviceId"; "required": false; }; }, {}, never, never, false, never>;
}
