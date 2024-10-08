import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ServerSecurityConfig } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { DeviceProfileService } from '@core/http/device-profile.service';
import * as i0 from "@angular/core";
export declare class Lwm2mBootstrapConfigServersComponent implements OnInit, ControlValueAccessor, OnDestroy {
    translate: TranslateService;
    matDialog: MatDialog;
    private dialogService;
    private deviceProfileService;
    private fb;
    bootstrapConfigServersFormGroup: UntypedFormGroup;
    disabled: boolean;
    isTransportWasRunWithBootstrap: boolean;
    isTransportWasRunWithBootstrapChange: EventEmitter<boolean>;
    isBootstrapServerUpdateEnableValue: boolean;
    set isBootstrapServerUpdateEnable(value: boolean);
    private destroy$;
    private propagateChange;
    constructor(translate: TranslateService, matDialog: MatDialog, dialogService: DialogService, deviceProfileService: DeviceProfileService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    get serverConfigsFromArray(): UntypedFormArray;
    setDisabledState(isDisabled: boolean): void;
    writeValue(serverConfigs: Array<ServerSecurityConfig> | null): void;
    trackByParams(index: number): number;
    removeServerConfig($event: Event, index: number): void;
    addServerConfig(): void;
    updateIsTransportWasRunWithBootstrap(newValue: boolean): void;
    validate(c: UntypedFormControl): {
        serverConfigs: {
            valid: boolean;
        };
    };
    isBootstrapServerNotAvailable(): boolean;
    private isBootstrapAdded;
    private removeBootstrapServerConfig;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mBootstrapConfigServersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mBootstrapConfigServersComponent, "tb-profile-lwm2m-bootstrap-config-servers", never, { "disabled": { "alias": "disabled"; "required": false; }; "isTransportWasRunWithBootstrap": { "alias": "isTransportWasRunWithBootstrap"; "required": false; }; "isBootstrapServerUpdateEnable": { "alias": "isBootstrapServerUpdateEnable"; "required": false; }; }, { "isTransportWasRunWithBootstrapChange": "isTransportWasRunWithBootstrapChange"; }, never, never, false, never>;
}
