import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import * as i0 from "@angular/core";
export interface IotHubUnpublishedWarningDialogData {
    item: MpItemVersionView;
}
export declare class TbIotHubUnpublishedWarningDialogComponent extends DialogComponent<TbIotHubUnpublishedWarningDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubUnpublishedWarningDialogComponent, boolean>;
    data: IotHubUnpublishedWarningDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubUnpublishedWarningDialogComponent, boolean>, data: IotHubUnpublishedWarningDialogData);
    confirm(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubUnpublishedWarningDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubUnpublishedWarningDialogComponent, "tb-iot-hub-unpublished-warning-dialog", never, {}, {}, never, never, false, never>;
}
