import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import * as i0 from "@angular/core";
export interface IotHubInstalledItemsDialogData {
    item: MpItemVersionView;
}
export declare class TbIotHubInstalledItemsDialogComponent extends DialogComponent<TbIotHubInstalledItemsDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubInstalledItemsDialogComponent>;
    data: IotHubInstalledItemsDialogData;
    item: MpItemVersionView;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubInstalledItemsDialogComponent>, data: IotHubInstalledItemsDialogData);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubInstalledItemsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubInstalledItemsDialogComponent, "tb-iot-hub-installed-items-dialog", never, {}, {}, never, never, false, never>;
}
