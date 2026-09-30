import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@core/auth/auth.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@core/http/notification.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class RequestTrendzDialogComponent extends DialogComponent<RequestTrendzDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RequestTrendzDialogComponent>;
    private authService;
    private dialogs;
    private translate;
    private notificationService;
    private wl;
    isCustomerUser: boolean;
    name: any;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RequestTrendzDialogComponent>, authService: AuthService, dialogs: DialogService, translate: TranslateService, notificationService: NotificationService, wl: WhiteLabelingService);
    requestAccess($event: Event): void;
    learnMore($event: Event): void;
    loginAsSysAdmin($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequestTrendzDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RequestTrendzDialogComponent, "tb-request-trendz-dialog", never, {}, {}, never, never, false, never>;
}
