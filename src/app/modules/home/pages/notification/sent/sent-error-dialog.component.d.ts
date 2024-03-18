import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationDeliveryMethod, NotificationRequest } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export interface NotificationRequestErrorDialogData {
    notificationRequest: NotificationRequest;
}
export declare class SentErrorDialogComponent extends DialogComponent<SentErrorDialogComponent, void> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<SentErrorDialogComponent, void>;
    data: NotificationRequestErrorDialogData;
    errorStats: {
        [key in NotificationDeliveryMethod]: {
            [errorKey in string]: string;
        };
    };
    NotificationDeliveryMethodInfoMap: Map<NotificationDeliveryMethod, import("@shared/models/notification.models").NotificationDeliveryMethodInfo>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SentErrorDialogComponent, void>, data: NotificationRequestErrorDialogData);
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SentErrorDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SentErrorDialogComponent, "tb-notification-send-error-dialog", never, {}, {}, never, never, false, never>;
}
