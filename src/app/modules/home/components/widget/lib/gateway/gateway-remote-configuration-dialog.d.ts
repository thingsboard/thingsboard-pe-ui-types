import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface GatewayRemoteConfigurationDialogData {
    gatewayName: string;
}
export declare class GatewayRemoteConfigurationDialogComponent extends DialogComponent<GatewayRemoteConfigurationDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    data: GatewayRemoteConfigurationDialogData;
    dialogRef: MatDialogRef<GatewayRemoteConfigurationDialogComponent, boolean>;
    private fb;
    gatewayName: string;
    gatewayControl: FormControl;
    constructor(store: Store<AppState>, router: Router, data: GatewayRemoteConfigurationDialogData, dialogRef: MatDialogRef<GatewayRemoteConfigurationDialogComponent, boolean>, fb: FormBuilder);
    close(): void;
    turnOff(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayRemoteConfigurationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayRemoteConfigurationDialogComponent, "gateway-remote-configuration-dialog", never, {}, {}, never, never, false, never>;
}
