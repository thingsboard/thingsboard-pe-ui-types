import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface IotHubUpgradeRequiredDialogData {
    minTbVersion: number;
}
export declare class TbIotHubUpgradeRequiredDialogComponent extends DialogComponent<TbIotHubUpgradeRequiredDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubUpgradeRequiredDialogComponent>;
    data: IotHubUpgradeRequiredDialogData;
    readonly minVersion: string;
    readonly currentVersion: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubUpgradeRequiredDialogComponent>, data: IotHubUpgradeRequiredDialogData);
    close(): void;
    upgradeInstance(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubUpgradeRequiredDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubUpgradeRequiredDialogComponent, "tb-iot-hub-upgrade-required-dialog", never, {}, {}, never, never, false, never>;
}
