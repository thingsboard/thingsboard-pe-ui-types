import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { SubscriptionEntry, SubscriptionErrorCode } from '@shared/models/subscription.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface EntityLimitDialogData {
    subscriptionErrorCode: SubscriptionErrorCode;
    subscriptionEntry: SubscriptionEntry;
    value: any;
}
export declare class EntityLimitDialogComponent extends DialogComponent<EntityLimitDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private translate;
    data: EntityLimitDialogData;
    private window;
    dialogRef: MatDialogRef<EntityLimitDialogComponent>;
    limitReachedSvg: string;
    errorContent: string;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, data: EntityLimitDialogData, window: Window, dialogRef: MatDialogRef<EntityLimitDialogComponent>);
    upgrade(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityLimitDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityLimitDialogComponent, "tb-entity-limit-dialog", never, {}, {}, never, never, false, never>;
}
