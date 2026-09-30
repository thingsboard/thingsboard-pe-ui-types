import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import * as i0 from "@angular/core";
export interface IotHubDeleteDialogData {
    installedItemId: string;
    itemName: string;
    itemType?: string;
}
export declare class TbIotHubDeleteDialogComponent extends DialogComponent<TbIotHubDeleteDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubDeleteDialogComponent, boolean>;
    data: IotHubDeleteDialogData;
    private iotHubApiService;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubDeleteDialogComponent, boolean>, data: IotHubDeleteDialogData, iotHubApiService: IotHubApiService);
    confirm(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubDeleteDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubDeleteDialogComponent, "tb-iot-hub-delete-dialog", never, {}, {}, never, never, false, never>;
}
