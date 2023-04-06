import { NotificationTarget, NotificationTargetConfigType, NotificationTargetType, SlackChanelType } from '@shared/models/notification.models';
import { OnDestroy } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '@core/http/notification.service';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export interface RecipientNotificationDialogData {
    target?: NotificationTarget;
    isAdd?: boolean;
    readonly?: boolean;
}
export declare class RecipientNotificationDialogComponent extends DialogComponent<RecipientNotificationDialogComponent, NotificationTarget> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RecipientNotificationDialogComponent, NotificationTarget>;
    data: RecipientNotificationDialogData;
    private fb;
    private notificationService;
    private authState;
    private authUser;
    targetNotificationForm: FormGroup;
    notificationTargetType: typeof NotificationTargetType;
    notificationTargetTypes: NotificationTargetType[];
    notificationTargetTypeTranslationMap: Map<NotificationTargetType, string>;
    notificationTargetConfigType: typeof NotificationTargetConfigType;
    notificationTargetConfigTypes: NotificationTargetConfigType[];
    notificationTargetConfigTypeInfoMap: Map<NotificationTargetConfigType, import("@shared/models/notification.models").NotificationTargetConfigTypeInfo>;
    slackChanelTypes: SlackChanelType[];
    slackChanelTypesTranslateMap: Map<SlackChanelType, string>;
    entityType: typeof EntityType;
    isAdd: boolean;
    dialogTitle: string;
    private readonly destroy$;
    private userFilterFormControls;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RecipientNotificationDialogComponent, NotificationTarget>, data: RecipientNotificationDialogData, fb: FormBuilder, notificationService: NotificationService);
    ngOnDestroy(): void;
    cancel(): void;
    save(): void;
    isSysAdmin(): boolean;
    private allowNotificationTargetConfigTypes;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipientNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipientNotificationDialogComponent, "tb-target-notification-dialog", never, {}, {}, never, never, false, never>;
}
