import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { DeviceInstalledItemDescriptor, IotHubInstalledItem } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { EntityId } from '@shared/models/id/entity-id';
import { IotHubAddItemDialogResult } from './iot-hub-add-item-dialog.component';
import { IotHubItemDetailDialogMode } from './iot-hub-item-detail-dialog.component';
import { IotHubBuiltInService } from './iot-hub-built-in.service';
import * as i0 from "@angular/core";
/**
 * What `openBuiltInOrConfirmInstall` did with a built-in item: 'handled' means nothing is left to do
 * (the local copy was opened, or the user was told why it could not be), while 'install-requested'
 * means the component really is absent and the user asked for it to be installed.
 */
export type IotHubBuiltInAction = 'handled' | 'install-requested';
export declare class IotHubActionsService {
    private dialog;
    private dialogService;
    private translate;
    private builtInService;
    constructor(dialog: MatDialog, dialogService: DialogService, translate: TranslateService, builtInService: IotHubBuiltInService);
    openItemDetail(item: MpItemVersionView, installedItem?: IotHubInstalledItem, installedItemsCount?: number, mode?: IotHubItemDetailDialogMode, showCreator?: boolean, preview?: boolean): Observable<any>;
    openInstalledItems(item: MpItemVersionView): Observable<any>;
    addItem(itemType: ItemType, options?: {
        itemSubType?: string;
        entityId?: EntityId;
        entityGroupId?: string;
        customerId?: string;
    }): Observable<IotHubAddItemDialogResult>;
    /**
     * Runs the primary action of an item: built-in content is opened locally (never installed),
     * device packages are connected, everything else goes through the install dialog.
     */
    installItem(item: MpItemVersionView): Observable<string>;
    /** Opens the local copy of a built-in item, or asks to install it when it really is absent. */
    openBuiltInOrConfirmInstall(item: MpItemVersionView): Observable<IotHubBuiltInAction>;
    /**
     * Asks whether to install a built-in item whose local copy is gone — the component the Hub entry
     * mirrors was deleted from this instance, so installing is the only way to get it back.
     */
    confirmInstallMissingBuiltIn(item: MpItemVersionView): Observable<boolean>;
    /** Reports that the local copy could not be checked — nothing was opened and nothing installed. */
    showBuiltInLookupFailed(item: MpItemVersionView): void;
    private openOrInstallBuiltIn;
    private runInstall;
    updateItem(installedItem: IotHubInstalledItem, version: string, versionId: string): Observable<string | boolean>;
    deleteItem(installedItem: IotHubInstalledItem): Observable<boolean>;
    installDevice(item: MpItemVersionView, options?: {
        entityGroupId?: string;
        customerId?: string;
    }): Observable<string>;
    reviewDevice(item: MpItemVersionView, deviceDescriptor: DeviceInstalledItemDescriptor): Observable<any>;
    private openDeviceInstallDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<IotHubActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IotHubActionsService>;
}
