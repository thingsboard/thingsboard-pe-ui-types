import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export interface IotHubSelectCfEntityDialogData {
    itemName: string;
}
export declare class TbIotHubSelectCfEntityDialogComponent extends DialogComponent<TbIotHubSelectCfEntityDialogComponent, EntityId | null> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubSelectCfEntityDialogComponent, EntityId | null>;
    data: IotHubSelectCfEntityDialogData;
    selectedEntityId: EntityId | null;
    cfEntityTypes: EntityType[];
    defaultCfEntityType: EntityType;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubSelectCfEntityDialogComponent, EntityId | null>, data: IotHubSelectCfEntityDialogData);
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubSelectCfEntityDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubSelectCfEntityDialogComponent, "tb-iot-hub-select-cf-entity-dialog", never, {}, {}, never, never, false, never>;
}
