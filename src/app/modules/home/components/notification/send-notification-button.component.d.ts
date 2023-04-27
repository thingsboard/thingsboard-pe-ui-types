import { MatDialog } from '@angular/material/dialog';
import { ActiveComponentService } from '@core/services/active-component.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class SendNotificationButtonComponent {
    private dialog;
    private store;
    private activeComponentService;
    private userPermissionsService;
    private authUser;
    constructor(dialog: MatDialog, store: Store<AppState>, activeComponentService: ActiveComponentService, userPermissionsService: UserPermissionsService);
    sendNotification($event: Event): void;
    show(): boolean;
    private isCustomer;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendNotificationButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendNotificationButtonComponent, "tb-send-notification-button", never, {}, {}, never, never, false, never>;
}
