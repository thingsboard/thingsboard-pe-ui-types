import { EntityType } from '@shared/models/entity-type.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { AuthService } from '@core/auth/auth.service';
import { NotificationService } from '@core/http/notification.service';
import * as i0 from "@angular/core";
export interface EntityLimitExceededDialogData {
    entityType: EntityType;
    limit: number;
}
export declare class EntityLimitExceededDialogComponent extends DialogComponent<EntityLimitExceededDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    data: EntityLimitExceededDialogData;
    dialogRef: MatDialogRef<EntityLimitExceededDialogComponent>;
    private authService;
    private dialogs;
    private translate;
    private notificationService;
    limitReachedText: string;
    isCustomerUser: boolean;
    constructor(store: Store<AppState>, router: Router, data: EntityLimitExceededDialogData, dialogRef: MatDialogRef<EntityLimitExceededDialogComponent>, authService: AuthService, dialogs: DialogService, translate: TranslateService, notificationService: NotificationService);
    cancel(): void;
    requestLimitIncrease($event: Event): void;
    loginAsSysAdmin($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityLimitExceededDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityLimitExceededDialogComponent, "tb-entity-limit-exceeded-dialog", never, {}, {}, never, never, false, never>;
}
