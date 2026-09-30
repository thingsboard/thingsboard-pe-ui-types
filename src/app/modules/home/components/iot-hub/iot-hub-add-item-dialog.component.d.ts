import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { IotHubActionsService } from './iot-hub-actions.service';
import * as i0 from "@angular/core";
export interface IotHubAddItemDialogData {
    itemType: ItemType;
    itemSubType?: string;
    entityId?: EntityId;
    entityGroupId?: string;
    customerId?: string;
}
export interface IotHubAddItemDialogResult {
    item: MpItemVersionView;
    descriptor: any;
}
export declare class TbIotHubAddItemDialogComponent extends DialogComponent<TbIotHubAddItemDialogComponent, IotHubAddItemDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubAddItemDialogComponent, IotHubAddItemDialogResult>;
    data: IotHubAddItemDialogData;
    private translate;
    private iotHubApiService;
    private dialogService;
    private dialog;
    private iotHubActions;
    itemType: ItemType;
    itemSubType: string;
    isInstalling: boolean;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubAddItemDialogComponent, IotHubAddItemDialogResult>, data: IotHubAddItemDialogData, translate: TranslateService, iotHubApiService: IotHubApiService, dialogService: DialogService, dialog: MatDialog, iotHubActions: IotHubActionsService);
    getTitle(): string;
    onAddItem(item: MpItemVersionView): void;
    private doAddItem;
    private installItem;
    private installDeviceItem;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubAddItemDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubAddItemDialogComponent, "tb-iot-hub-add-item-dialog", never, {}, {}, never, never, false, never>;
}
