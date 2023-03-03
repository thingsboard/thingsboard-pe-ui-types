import { DialogComponent } from '@shared/components/dialog.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ServerConfigType } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
import * as i0 from "@angular/core";
export declare class Lwm2mBootstrapAddConfigServerDialogComponent extends DialogComponent<Lwm2mBootstrapAddConfigServerDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private fb;
    dialogRef: MatDialogRef<Lwm2mBootstrapAddConfigServerDialogComponent, boolean>;
    addConfigServerFormGroup: UntypedFormGroup;
    serverTypes: ServerConfigType[];
    serverConfigTypeNamesMap: Map<ServerConfigType, string>;
    constructor(store: Store<AppState>, router: Router, fb: UntypedFormBuilder, dialogRef: MatDialogRef<Lwm2mBootstrapAddConfigServerDialogComponent, boolean>);
    addServerConfig(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mBootstrapAddConfigServerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mBootstrapAddConfigServerDialogComponent, "tb-profile-lwm2m-bootstrap-add-config-server-dialog", never, {}, {}, never, never, false, never>;
}
