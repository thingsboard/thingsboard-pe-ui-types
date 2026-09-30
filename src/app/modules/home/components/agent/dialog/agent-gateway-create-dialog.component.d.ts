import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { DeviceService } from '@core/http/device.service';
import { Device } from '@shared/models/device.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class AgentGatewayCreateDialogComponent extends DialogComponent<AgentGatewayCreateDialogComponent, Device> {
    protected store: Store<AppState>;
    protected router: Router;
    private deviceService;
    private fb;
    dialogRef: MatDialogRef<AgentGatewayCreateDialogComponent, Device>;
    createFormGroup: UntypedFormGroup;
    entityType: typeof EntityType;
    submitting: boolean;
    constructor(store: Store<AppState>, router: Router, deviceService: DeviceService, fb: UntypedFormBuilder, dialogRef: MatDialogRef<AgentGatewayCreateDialogComponent, Device>);
    cancel(): void;
    create(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentGatewayCreateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentGatewayCreateDialogComponent, "tb-agent-gateway-create-dialog", never, {}, {}, never, never, false, never>;
}
