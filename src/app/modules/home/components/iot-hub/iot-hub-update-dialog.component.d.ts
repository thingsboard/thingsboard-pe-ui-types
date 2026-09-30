import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IotHubUpdateDialogData {
    installedItemId: string;
    itemName: string;
    itemType: ItemType;
    version: string;
    versionId: string;
}
export type UpdateState = 'confirm' | 'updating' | 'success' | 'error';
export declare class TbIotHubUpdateDialogComponent extends DialogComponent<TbIotHubUpdateDialogComponent, string | boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubUpdateDialogComponent, string | boolean>;
    data: IotHubUpdateDialogData;
    private dialog;
    private dialogService;
    private translate;
    private iotHubApiService;
    ItemType: typeof ItemType;
    typeTranslations: Map<ItemType, string>;
    state: UpdateState;
    errorMessage: string;
    entityDetailsUrl: string | null;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubUpdateDialogComponent, string | boolean>, data: IotHubUpdateDialogData, dialog: MatDialog, dialogService: DialogService, translate: TranslateService, iotHubApiService: IotHubApiService);
    getTypeLabel(): string;
    update(force?: boolean): void;
    openEntityDetails(): void;
    close(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubUpdateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubUpdateDialogComponent, "tb-iot-hub-update-dialog", never, {}, {}, never, never, false, never>;
}
