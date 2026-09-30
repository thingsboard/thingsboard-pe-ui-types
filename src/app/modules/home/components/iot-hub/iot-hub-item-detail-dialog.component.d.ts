import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { MpItemVersionView, NodeInfo } from '@shared/models/iot-hub/iot-hub-version.models';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { IotHubInstalledItem } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { TranslateService } from '@ngx-translate/core';
import { IotHubActionsService } from '@home/components/iot-hub/iot-hub-actions.service';
import * as i0 from "@angular/core";
export type IotHubItemDetailDialogMode = 'default' | 'add';
export interface IotHubItemDetailDialogData {
    item: MpItemVersionView;
    installedItem?: IotHubInstalledItem;
    installedItemsCount?: number;
    mode?: IotHubItemDetailDialogMode;
    showCreator?: boolean;
    preview?: boolean;
}
export declare class TbIotHubItemDetailDialogComponent extends DialogComponent<TbIotHubItemDetailDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubItemDetailDialogComponent>;
    data: IotHubItemDetailDialogData;
    private dialog;
    private translate;
    private iotHubApiService;
    private iotHubActions;
    readonly ItemType: typeof ItemType;
    item: MpItemVersionView;
    mode: IotHubItemDetailDialogMode;
    showCreator: boolean;
    preview: boolean;
    typeTranslations: Map<ItemType, string>;
    readmeContent: string;
    installedItem?: IotHubInstalledItem;
    installedItemsCount: number;
    carouselImages: string[];
    carouselIndex: number;
    versionLabel: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubItemDetailDialogComponent>, data: IotHubItemDetailDialogData, dialog: MatDialog, translate: TranslateService, iotHubApiService: IotHubApiService, iotHubActions: IotHubActionsService);
    get showInstallCount(): boolean;
    get actionLabel(): string;
    isCompactLayout(): boolean;
    getPreviewUrl(): string | null;
    getCreatorAvatarUrl(): string | null;
    getTypeLabel(): string;
    getTypeIcon(): string;
    getCompactIcon(): string;
    getCompactSubtypeLabel(): string;
    getSubtypeLabel(): string;
    getNodes(): NodeInfo[];
    isInstalled(): boolean;
    shouldShowChangelog(): boolean;
    hasUpdate(): boolean;
    /** Runs whatever the item's action mode calls for: open the local copy, connect, or install. */
    runPrimaryAction(): void;
    /**
     * For a built-in item this opens the local copy (the dialog closes itself on navigation) and only
     * installs if that copy no longer exists — `IotHubActionsService.installItem` owns that decision.
     */
    install(): void;
    installDevice(): void;
    updateItem(): void;
    navigateToCreator(): void;
    openEntityDetails(): void;
    openSolutionInstructions(): void;
    deleteItem(): void;
    addItem(): void;
    openInstalledItemsDialog(): void;
    hasDetails(): boolean;
    goToPrevSlide(): void;
    goToNextSlide(): void;
    close(): void;
    private buildCarouselImages;
    private loadReadme;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubItemDetailDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubItemDetailDialogComponent, "tb-iot-hub-item-detail-dialog", never, {}, {}, never, never, false, never>;
}
