import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Notification } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export interface InboxNotificationDialogData {
    notification: Notification;
}
export declare class InboxNotificationDialogComponent extends DialogComponent<InboxNotificationDialogComponent, string> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<InboxNotificationDialogComponent, string>;
    data: InboxNotificationDialogData;
    notification: Notification;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<InboxNotificationDialogComponent, string>, data: InboxNotificationDialogData);
    markAsRead(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InboxNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InboxNotificationDialogComponent, "tb-inbox-notification-dialog", never, {}, {}, never, never, false, never>;
}
